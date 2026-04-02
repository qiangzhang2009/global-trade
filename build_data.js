#!/usr/bin/env node
const fs = require('fs');

// ─── Extract country data from markdown ───
function extractCountry(md, name_zh, name_en, flag, region_zh, region_en) {
  const official = [];
  const b2b = [];
  const distribution = [];
  
  // Find numbered items with URLs
  const numRe = /(\d+)\.\s+\*?\*?([^*\n]+?)\*?\s*\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g;
  let m;
  const raw = md.replace(/\*\*(.*?)\*\*/g, '$1');
  
  // Extract from table rows
  const lines = md.split('\n');
  let currentSection = 'official';
  for (const line of lines) {
    const t = line.trim();
    if (t.includes('官方权威') || t.includes('Official') || t.includes('官方核心渠道')) {
      currentSection = 'official';
    } else if (t.includes('B2B') || t.includes('本土主流B2B') || t.includes('B2B采购')) {
      currentSection = 'b2b';
    } else if (t.includes('分销') || t.includes('代理') || t.includes('Distribution') || t.includes('代理分销')) {
      currentSection = 'distribution';
    }
    
    // Parse table row: | Platform | URL | ... |
    if (t.startsWith('|') && !t.match(/^\|[-\s]+$/) && !t.match(/^\|\s*平台/)) {
      const cells = t.split('|').slice(1, -1);
      if (cells.length >= 2) {
        let url = cells[1].trim();
        // Extract URL
        const urlMatch = url.match(/\(https?:\/\/[^)]+\)/);
        if (urlMatch) {
          url = urlMatch[1];
          const name = urlMatch.input.replace(urlMatch[0], '').trim().replace(/\*+/g, '') || cells[0].trim().replace(/\*+/g, '');
          const desc = cells.length >= 3 ? cells[2].trim().replace(/\*+/g, '') : '';
          const tags = desc ? [desc.split(/[，,]/)[0].trim()] : ['全品类'];
          if (currentSection === 'official') official.push({ name, url, desc: { zh: desc, en: desc }, tags });
          else if (currentSection === 'b2b') b2b.push({ name, url, desc: { zh: desc, en: desc }, tags });
          else distribution.push({ name, url, desc: { zh: desc, en: desc }, tags });
        }
      }
    }
    
    // Parse numbered list items
    const numMatch = t.match(/^\d+\.\s+\[([^\]]+)\]\((https?:\/\/[^)]+)\)/);
    if (numMatch) {
      const name = numMatch[1].trim();
      const url = numMatch[2];
      const desc = t.replace(/\d+\.\s*\[[^\]]+\]\([^)]+\)/, '').replace(/[-*#]/g, '').trim().slice(0, 80);
      if (currentSection === 'official') official.push({ name, url, desc: { zh: desc, en: desc }, tags: ['官方'] });
      else if (currentSection === 'b2b') b2b.push({ name, url, desc: { zh: desc, en: desc }, tags: ['B2B'] });
      else distribution.push({ name, url, desc: { zh: desc, en: desc }, tags: ['分销'] });
    }
  }
  
  return {
    id: flag.toLowerCase(),
    name: { zh: name_zh, en: name_en },
    flag,
    channels: { official, b2b, distribution }
  };
}

// ─── Build full TRADEDATA ───
const TRADEDATA = {
  continents: [
    {
      id: "europe",
      name: { zh: "欧洲", en: "Europe" },
      nameSort: "E",
      regions: [
        {
          id: "pan-europe",
          name: { zh: "全欧洲", en: "Pan-European" },
          countries: []
        },
        {
          id: "western-europe",
          name: { zh: "西欧", en: "Western Europe" },
          countries: [
            {
              id: "germany",
              name: { zh: "德国", en: "Germany" },
              flag: "DE",
              channels: {
                official: [
                  { name: "Germany Trade & Invest (GTAI)", url: "https://www.gtai.de", desc: { zh: "德国联邦政府直属贸易投资促进机构，中企进入德国市场的官方核心入口", en: "German federal government trade investment agency — official core entry for Chinese companies" }, tags: ["官方", "市场准入", "采购商匹配"] },
                  { name: "德国工商大会DIHK", url: "https://www.dihk.de", desc: { zh: "德国全国性商会组织，覆盖全德80个地方工商会，350万+企业会员", en: "Germany's national chamber covering 80 local chambers, 3.5M+ members" }, tags: ["商会", "分销"] },
                  { name: "德国联邦政府采购平台 evergabe.de", url: "https://www.evergabe.de", desc: { zh: "德国政府官方招标采购门户", en: "Germany's official government procurement portal" }, tags: ["政府采购", "招标"] }
                ],
                b2b: [
                  { name: "Wer liefert Was (WLW)", url: "https://www.wlw.de", desc: { zh: "德语区最大B2B平台，65万+企业入驻", en: "Largest B2B platform in DACH region, 650,000+ companies" }, tags: ["B2B", "工业", "批发"] },
                  { name: "IndustryStock（工业集市）", url: "https://www.industrystock.com", desc: { zh: "德国专业工业B2B平台，欧洲工业4.0核心平台，17种语言，60万+会员", en: "Germany's professional industrial B2B platform, 600,000+ members" }, tags: ["工业", "机械", "电子"] },
                  { name: "Mercateo", url: "https://www.mercateo.com", desc: { zh: "德国头部B2B批发采购平台，入驻超100万企业买家", en: "Germany's top B2B wholesale platform with 1M+ buyers" }, tags: ["批发", "MRO", "工业品"] }
                ],
                distribution: [
                  { name: "Agentur Navigator", url: "https://www.agentur-navigator.de", desc: { zh: "德国最大的代理招募专属平台，覆盖全行业", en: "Germany's largest agent recruitment platform covering all industries" }, tags: ["代理", "分销", "加盟"] },
                  { name: "Business Matching Deutschland", url: "https://www.business-matching.de", desc: { zh: "德国专业商务匹配平台，专注中德企业供需对接、代理分销合作", en: "Germany's professional business matching for China-Germany trade" }, tags: ["商务匹配", "中德", "代理"] }
                ]
              }
            },
            {
              id: "france",
              name: { zh: "法国", en: "France" },
              flag: "FR",
              channels: {
                official: [
                  { name: "Business France", url: "https://www.businessfrance.fr", desc: { zh: "法国政府直属贸易促进机构", en: "French government trade promotion agency" }, tags: ["官方", "市场准入"] },
                  { name: "法国工商会CCI France", url: "https://www.ccifrance.fr", desc: { zh: "法国全国性商会组织，覆盖全法120+地方工商会", en: "France's national chamber of commerce" }, tags: ["商会", "分销"] },
                  { name: "法国政府采购平台", url: "https://www.marches-publics.gouv.fr", desc: { zh: "法国政府官方招标采购门户", en: "France's official procurement portal" }, tags: ["政府采购", "招标"] }
                ],
                b2b: [
                  { name: "PagesJaunes（法国黄页）", url: "https://www.pagesjaunes.fr", desc: { zh: "法国最大的商业目录平台", en: "France's largest business directory" }, tags: ["企业名录", "批发商"] },
                  { name: "Europages France", url: "https://www.europages.fr", desc: { zh: "Europages法语分站，覆盖300万+欧洲企业", en: "Europages French site covering 3M+ European companies" }, tags: ["B2B", "全品类"] }
                ],
                distribution: [
                  { name: "Réseau Distribution France", url: "https://www.reseau-distribution-france.fr", desc: { zh: "法国本土最大的分销代理匹配平台，覆盖全行业", en: "France's largest distribution agent matching platform" }, tags: ["分销", "代理"] }
                ]
              }
            },
            {
              id: "uk",
              name: { zh: "英国", en: "United Kingdom" },
              flag: "GB",
              channels: {
                official: [
                  { name: "Department for Business and Trade (DBT)", url: "https://www.great.gov.uk", desc: { zh: "英国政府商业贸易部官方平台，35万+英国企业数据库", en: "UK government business trade platform with 350,000+ companies" }, tags: ["官方", "市场准入"] },
                  { name: "英国工商会BCC", url: "https://www.britishchambers.org.uk", desc: { zh: "英国全国性商会组织，覆盖全英53个地方商会", en: "UK national chamber covering 53 local chambers" }, tags: ["商会"] },
                  { name: "英国政府采购平台Contracts Finder", url: "https://www.contractsfinder.service.gov.uk", desc: { zh: "英国政府官方招标采购门户", en: "UK government official procurement portal" }, tags: ["政府采购", "招标"] }
                ],
                b2b: [
                  { name: "Applegate", url: "https://www.applegate.co.uk", desc: { zh: "英国最大工业B2B平台", en: "UK's largest industrial B2B platform" }, tags: ["工业", "B2B"] },
                  { name: "Yell（英国黄页）", url: "https://www.yell.com", desc: { zh: "英国老牌企业黄页", en: "UK's long-established business yellow pages" }, tags: ["企业名录", "批发商"] }
                ],
                distribution: [
                  { name: "UK Distribution Network", url: "https://www.ukdistributionnetwork.co.uk", desc: { zh: "英国最大的分销代理匹配平台，覆盖全行业", en: "UK's largest distribution agent matching platform" }, tags: ["分销", "代理"] }
                ]
              }
            },
            {
              id: "netherlands",
              name: { zh: "荷兰", en: "Netherlands" },
              flag: "NL",
              channels: {
                official: [
                  { name: "荷兰企业发展局RVO", url: "https://www.rvo.nl", desc: { zh: "荷兰政府直属贸易促进机构", en: "Dutch government trade development agency" }, tags: ["官方", "市场准入"] },
                  { name: "荷兰政府采购平台TenderNed", url: "https://www.tenderned.nl", desc: { zh: "荷兰政府官方招标采购门户", en: "Dutch government official procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Dutch Business Directory", url: "https://www.dutchbusinessdirectory.nl", desc: { zh: "荷兰本土权威B2B平台", en: "Dutch authoritative B2B platform" }, tags: ["B2B"] }
                ],
                distribution: [
                  { name: "Dutch Distribution Network", url: "https://www.dutchdistributionnetwork.nl", desc: { zh: "荷兰分销代理匹配核心平台", en: "Dutch distribution agent matching platform" }, tags: ["分销", "代理"] }
                ]
              }
            },
            {
              id: "belgium",
              name: { zh: "比利时", en: "Belgium" },
              flag: "BE",
              channels: {
                official: [
                  { name: "比利时出口与投资局AWEX", url: "https://www.awex.be", desc: { zh: "比利时政府贸易投资促进机构", en: "Belgian export and investment agency" }, tags: ["官方"] },
                  { name: "比利时政府采购平台", url: "https://www.tenders.be", desc: { zh: "比利时政府官方招标采购门户", en: "Belgian government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Belgian Business Directory", url: "https://www.belgianbusinessdirectory.be", desc: { zh: "比利时权威B2B平台", en: "Belgian authoritative B2B platform" }, tags: ["B2B"] }
                ],
                distribution: []
              }
            },
            {
              id: "switzerland",
              name: { zh: "瑞士", en: "Switzerland" },
              flag: "CH",
              channels: {
                official: [
                  { name: "瑞士出口促进局S-GE", url: "https://www.s-ge.com", desc: { zh: "瑞士官方贸易投资促进机构", en: "Switzerland's official trade investment agency" }, tags: ["官方"] },
                  { name: "瑞士政府采购平台SIMAP", url: "https://www.simap.ch", desc: { zh: "瑞士政府官方招标采购门户", en: "Switzerland's official e-procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "WLW Schweiz", url: "https://www.wlw.ch", desc: { zh: "德语区头部B2B平台瑞士分站", en: "DACH B2B platform, Swiss division" }, tags: ["B2B", "工业"] }
                ],
                distribution: []
              }
            },
            {
              id: "austria",
              name: { zh: "奥地利", en: "Austria" },
              flag: "AT",
              channels: {
                official: [
                  { name: "奥地利外贸局AUSTRIAN TRADE", url: "https://www.wko.at", desc: { zh: "奥地利官方贸易促进机构", en: "Austria's official trade promotion agency" }, tags: ["官方"] },
                  { name: "奥地利政府采购平台", url: "https://www.gmbh.gv.at", desc: { zh: "奥地利政府官方招标采购门户", en: "Austria's official procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Austrian Business Directory", url: "https://www.austrianbusinessdirectory.at", desc: { zh: "奥地利权威B2B平台", en: "Austria's authoritative B2B platform" }, tags: ["B2B"] }
                ],
                distribution: []
              }
            }
          ]
        },
        {
          id: "southern-europe",
          name: { zh: "南欧", en: "Southern Europe" },
          countries: [
            {
              id: "italy",
              name: { zh: "意大利", en: "Italy" },
              flag: "IT",
              channels: {
                official: [
                  { name: "意大利对外贸易委员会ICE", url: "https://www.ice.it", desc: { zh: "意大利政府直属贸易促进机构", en: "Italian government trade promotion agency" }, tags: ["官方"] },
                  { name: "意大利工商会Confcommercio", url: "https://www.confcommercio.it", desc: { zh: "意大利全国性商会组织，超70万家企业会员", en: "Italy's national chamber of commerce" }, tags: ["商会"] },
                  { name: "意大利政府采购平台MEPA", url: "https://www.acquistinretepa.it", desc: { zh: "意大利政府官方招标采购门户", en: "Italy's official procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Pagine Gialle（意大利黄页）", url: "https://www.paginegialle.it", desc: { zh: "意大利权威企业黄页与B2B平台", en: "Italy's authoritative business yellow pages and B2B platform" }, tags: ["企业名录", "B2B"] }
                ],
                distribution: [
                  { name: "Distribuzione Italia", url: "https://www.distribuzione-italia.it", desc: { zh: "意大利本土最大的分销代理匹配平台", en: "Italy's largest distribution agent matching platform" }, tags: ["分销", "代理"] }
                ]
              }
            },
            {
              id: "spain",
              name: { zh: "西班牙", en: "Spain" },
              flag: "ES",
              channels: {
                official: [
                  { name: "西班牙贸易投资促进局ICEX", url: "https://www.icex.es", desc: { zh: "西班牙政府直属贸易投资促进机构", en: "Spanish government trade investment agency" }, tags: ["官方"] },
                  { name: "西班牙工商会CEOE", url: "https://www.ceoe.es", desc: { zh: "西班牙全国性商会组织", en: "Spain's national employers' confederation" }, tags: ["商会"] },
                  { name: "西班牙政府采购平台PLACSP", url: "https://www.contractacion.es", desc: { zh: "西班牙政府官方招标采购门户", en: "Spain's official procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Guía de Empresas", url: "https://www.guiadempresas.es", desc: { zh: "西班牙最大企业名录与B2B平台，覆盖超300万家公司", en: "Spain's largest business directory covering 3M+ companies" }, tags: ["企业名录", "B2B"] }
                ],
                distribution: [
                  { name: "Distribución España", url: "https://www.distribucion-espana.es", desc: { zh: "西班牙本土专业的分销代理匹配平台", en: "Spain's professional distribution agent matching platform" }, tags: ["分销", "代理"] }
                ]
              }
            },
            {
              id: "portugal",
              name: { zh: "葡萄牙", en: "Portugal" },
              flag: "PT",
              channels: {
                official: [
                  { name: "葡萄牙全球贸易投资局AICEP", url: "https://www.aicep.gov.pt", desc: { zh: "葡萄牙政府官方贸易投资促进机构", en: "Portugal's official trade investment agency" }, tags: ["官方"] },
                  { name: "葡萄牙政府采购平台", url: "https://www.base.gov.pt", desc: { zh: "葡萄牙政府官方招标采购门户", en: "Portugal's official procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Portugal Business Directory", url: "https://www.portugalbusinessdirectory.pt", desc: { zh: "葡萄牙本土B2B平台", en: "Portugal's domestic B2B platform" }, tags: ["B2B"] }
                ],
                distribution: []
              }
            },
            {
              id: "greece",
              name: { zh: "希腊", en: "Greece" },
              flag: "GR",
              channels: {
                official: [
                  { name: "希腊企业局Enterprise Greece", url: "https://www.enterprisegreece.gov.gr", desc: { zh: "希腊政府官方贸易促进机构", en: "Greece's official trade promotion agency" }, tags: ["官方"] },
                  { name: "希腊政府采购平台", url: "https://www.publicprocurement.gr", desc: { zh: "希腊政府官方招标采购门户", en: "Greece's official procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Greece Business Directory", url: "https://www.greecebusinessdirectory.gr", desc: { zh: "希腊权威B2B平台", en: "Greece's authoritative B2B platform" }, tags: ["B2B"] }
                ],
                distribution: []
              }
            }
          ]
        },
        {
          id: "eastern-europe",
          name: { zh: "东欧", en: "Eastern Europe" },
          countries: [
            {
              id: "poland",
              name: { zh: "波兰", en: "Poland" },
              flag: "PL",
              channels: {
                official: [
                  { name: "波兰投资贸易局PAIH", url: "https://www.paih.gov.pl", desc: { zh: "波兰政府贸易投资促进机构", en: "Poland's investment and trade agency" }, tags: ["官方"] },
                  { name: "波兰政府采购平台", url: "https://www.uzp.gov.pl", desc: { zh: "波兰政府官方招标采购门户", en: "Poland's official procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Poland B2B", url: "https://www.polandb2b.com", desc: { zh: "波兰本土B2B平台", en: "Poland's domestic B2B platform" }, tags: ["B2B"] }
                ],
                distribution: []
              }
            },
            {
              id: "czech",
              name: { zh: "捷克", en: "Czech Republic" },
              flag: "CZ",
              channels: {
                official: [
                  { name: "捷克投资贸易局SARIO", url: "https://www.sario.cz", desc: { zh: "捷克政府贸易投资促进机构", en: "Czech Republic's investment and trade agency" }, tags: ["官方"] },
                  { name: "捷克政府采购平台", url: "https://www.vestnikverejnychzakazek.cz", desc: { zh: "捷克政府官方招标采购门户", en: "Czech Republic's official procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Czech B2B", url: "https://www.czechb2b.com", desc: { zh: "捷克本土B2B平台", en: "Czech Republic's domestic B2B platform" }, tags: ["B2B"] }
                ],
                distribution: []
              }
            },
            {
              id: "hungary",
              name: { zh: "匈牙利", en: "Hungary" },
              flag: "HU",
              channels: {
                official: [
                  { name: "匈牙利投资贸易局HIPA", url: "https://www.hipa.hu", desc: { zh: "匈牙利政府贸易投资促进机构", en: "Hungary's investment and trade agency" }, tags: ["官方"] },
                  { name: "匈牙利政府采购平台", url: "https://www.kozbeszerzes.hu", desc: { zh: "匈牙利政府官方招标采购门户", en: "Hungary's official procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Hungary B2B", url: "https://www.hungaryb2b.com", desc: { zh: "匈牙利本土B2B平台", en: "Hungary's domestic B2B platform" }, tags: ["B2B"] }
                ],
                distribution: []
              }
            },
            {
              id: "romania",
              name: { zh: "罗马尼亚", en: "Romania" },
              flag: "RO",
              channels: {
                official: [
                  { name: "罗马尼亚贸易投资促进局CRPCIS", url: "https://www.investromania.gov.ro", desc: { zh: "罗马尼亚政府贸易投资促进机构", en: "Romania's trade investment promotion agency" }, tags: ["官方"] },
                  { name: "罗马尼亚政府采购平台", url: "https://www.e-licitatie.ro", desc: { zh: "罗马尼亚政府官方招标采购门户", en: "Romania's official procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Romania B2B", url: "https://www.romaniab2b.com", desc: { zh: "罗马尼亚本土B2B平台", en: "Romania's domestic B2B platform" }, tags: ["B2B"] }
                ],
                distribution: []
              }
            }
          ]
        },
        {
          id: "northern-europe",
          name: { zh: "北欧", en: "Northern Europe" },
          countries: [
            {
              id: "sweden",
              name: { zh: "瑞典", en: "Sweden" },
              flag: "SE",
              channels: {
                official: [
                  { name: "瑞典贸易投资委员会Business Sweden", url: "https://www.business-sweden.se", desc: { zh: "瑞典政府贸易投资促进机构", en: "Sweden's trade and investment council" }, tags: ["官方"] },
                  { name: "瑞典政府采购平台", url: "https://www.oppnadata.se", desc: { zh: "瑞典政府官方招标采购门户", en: "Sweden's official procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Sweden B2B", url: "https://www.swedenb2b.com", desc: { zh: "瑞典本土B2B平台", en: "Sweden's domestic B2B platform" }, tags: ["B2B"] }
                ],
                distribution: []
              }
            },
            {
              id: "denmark",
              name: { zh: "丹麦", en: "Denmark" },
              flag: "DK",
              channels: {
                official: [
                  { name: "丹麦贸易投资局Trade Council Denmark", url: "https://www.tradecouncil.dk", desc: { zh: "丹麦政府贸易投资促进机构", en: "Denmark's trade and investment agency" }, tags: ["官方"] },
                  { name: "丹麦政府采购平台", url: "https://www.udbud.dk", desc: { zh: "丹麦政府官方招标采购门户", en: "Denmark's official procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Denmark B2B", url: "https://www.denmarkb2b.com", desc: { zh: "丹麦本土B2B平台", en: "Denmark's domestic B2B platform" }, tags: ["B2B"] }
                ],
                distribution: []
              }
            },
            {
              id: "finland",
              name: { zh: "芬兰", en: "Finland" },
              flag: "FI",
              channels: {
                official: [
                  { name: "芬兰企业局Business Finland", url: "https://www.businessfinland.fi", desc: { zh: "芬兰政府企业促进机构", en: "Finland's business development agency" }, tags: ["官方"] },
                  { name: "芬兰政府采购平台", url: "https://www.hankintailmoitukset.fi", desc: { zh: "芬兰政府官方招标采购门户", en: "Finland's official procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Finland B2B", url: "https://www.finlandb2b.com", desc: { zh: "芬兰本土B2B平台", en: "Finland's domestic B2B platform" }, tags: ["B2B"] }
                ],
                distribution: []
              }
            },
            {
              id: "norway",
              name: { zh: "挪威", en: "Norway" },
              flag: "NO",
              channels: {
                official: [
                  { name: "挪威创新署Innovation Norway", url: "https://www.innovationnorway.com", desc: { zh: "挪威政府创新投资促进机构", en: "Norway's innovation and investment agency" }, tags: ["官方"] },
                  { name: "挪威政府采购平台", url: "https://www.doffin.no", desc: { zh: "挪威政府官方招标采购门户", en: "Norway's official procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Norway B2B", url: "https://www.norwayb2b.com", desc: { zh: "挪威本土B2B平台", en: "Norway's domestic B2B platform" }, tags: ["B2B"] }
                ],
                distribution: []
              }
            }
          ]
        }
      ],
      crossborder: [
        { name: "TED (Tenders Electronic Daily)", url: "https://ted.europa.eu", desc: { zh: "欧盟官方公共采购门户，覆盖欧盟27国+欧洲经济区国家", en: "EU official public procurement portal covering 27 EU + EEA countries" }, tags: ["政府采购", "招标", "全品类"] },
        { name: "Enterprise Europe Network (EEN)", url: "https://een.ec.europa.eu", desc: { zh: "欧盟官方企业对接网络，覆盖60+国家、3000+合作机构", en: "EU official business network covering 60+ countries" }, tags: ["官方", "企业对接"] },
        { name: "Eurochambres（欧洲工商会联合会）", url: "https://www.eurochambres.eu", desc: { zh: "欧洲各国国家商会的联合组织，覆盖45个国家", en: "Association of European national chambers covering 45 countries" }, tags: ["商会", "全品类"] },
        { name: "Europages（欧洲黄页）", url: "https://www.europages.com", desc: { zh: "欧洲最大B2B企业名录，覆盖33+国家、260万+企业", en: "Europe's largest B2B directory covering 33+ countries" }, tags: ["B2B", "全品类"] },
        { name: "Kompass Europe（康帕斯）", url: "https://www.kompass.com", desc: { zh: "欧洲最权威B2B企业数据库，覆盖60+国家、5700万+企业", en: "Europe's most authoritative B2B database" }, tags: ["B2B", "企业数据库"] },
        { name: "DirectIndustry", url: "https://www.directindustry.com", desc: { zh: "欧洲顶级工业垂直B2B平台，被称为工业版阿里巴巴", en: "Europe's top industrial B2B platform" }, tags: ["工业", "B2B"] },
        { name: "European Distribution Network", url: "https://www.europeandistributionnetwork.com", desc: { zh: "欧洲最大分销代理匹配平台，覆盖全行业", en: "Europe's largest distribution agent matching platform" }, tags: ["分销", "代理"] }
      ]
    },
    {
      id: "africa",
      name: { zh: "非洲", en: "Africa" },
      nameSort: "A",
      regions: [
        {
          id: "pan-africa",
          name: { zh: "泛非", en: "Pan-African" },
          countries: []
        },
        {
          id: "north-africa",
          name: { zh: "北非", en: "North Africa" },
          countries: [
            {
              id: "egypt",
              name: { zh: "埃及", en: "Egypt" },
              flag: "EG",
              channels: {
                official: [
                  { name: "埃及贸易和工业部", url: "https://www.mti.gov.eg", desc: { zh: "埃及政府官方贸易主管部门", en: "Egypt's government trade ministry" }, tags: ["官方"] },
                  { name: "埃及政府采购平台", url: "https://www.egp.gov.eg", desc: { zh: "埃及政府官方招标采购门户", en: "Egypt's government procurement portal" }, tags: ["政府采购"] },
                  { name: "埃及工商联合会FEDCOC", url: "https://www.fedcoc.org.eg", desc: { zh: "埃及全国性商会组织", en: "Egypt's national chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "Yellow Pages Egypt", url: "https://yellowpages.com.eg/en", desc: { zh: "埃及大型企业目录，逾40万家企业", en: "Egypt's major business directory with 400,000+ companies" }, tags: ["企业名录"] },
                  { name: "Egypt B2B", url: "https://www.egyptb2b.com", desc: { zh: "埃及本土头部B2B平台", en: "Egypt's leading domestic B2B platform" }, tags: ["B2B"] }
                ],
                distribution: [
                  { name: "Egypt Distribution Network", url: "https://www.egyptdistributionnetwork.com", desc: { zh: "埃及最大分销代理匹配平台", en: "Egypt's largest distribution agent matching platform" }, tags: ["分销", "代理"] }
                ]
              }
            },
            {
              id: "algeria",
              name: { zh: "阿尔及利亚", en: "Algeria" },
              flag: "DZ",
              channels: {
                official: [
                  { name: "阿尔及利亚贸易和出口促进部", url: "https://www.mcommerce.gov.dz", desc: { zh: "阿尔及利亚政府官方贸易主管部门", en: "Algeria's government trade ministry" }, tags: ["官方"] },
                  { name: "阿尔及利亚国家公共采购平台", url: "https://www.ampcn.dz", desc: { zh: "阿尔及利亚政府官方招标采购门户", en: "Algeria's national public procurement platform" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Algeria Business Pages", url: "https://www.algeriabusinesspages.com", desc: { zh: "阿尔及利亚权威B2B平台", en: "Algeria's authoritative B2B platform" }, tags: ["B2B"] }
                ],
                distribution: []
              }
            },
            {
              id: "morocco",
              name: { zh: "摩洛哥", en: "Morocco" },
              flag: "MA",
              channels: {
                official: [
                  { name: "摩洛哥外贸部", url: "https://www.maroccommerce.gov.ma", desc: { zh: "摩洛哥政府外贸主管部门", en: "Morocco's government foreign trade ministry" }, tags: ["官方"] },
                  { name: "摩洛哥政府采购平台", url: "https://www.marchespublics.gov.ma", desc: { zh: "摩洛哥政府招标采购门户", en: "Morocco's government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Pages Jaunes Maroc", url: "https://www.pagesjaunes.ma", desc: { zh: "摩洛哥最大企业黄页", en: "Morocco's largest business yellow pages" }, tags: ["企业名录"] }
                ],
                distribution: []
              }
            }
          ]
        },
        {
          id: "east-africa",
          name: { zh: "东非", en: "East Africa" },
          countries: [
            {
              id: "kenya",
              name: { zh: "肯尼亚", en: "Kenya" },
              flag: "KE",
              channels: {
                official: [
                  { name: "肯尼亚贸易部", url: "https://www.trade.go.ke", desc: { zh: "肯尼亚政府官方贸易主管部门", en: "Kenya's government trade ministry" }, tags: ["官方"] },
                  { name: "肯尼亚政府采购平台", url: "https://www.tenders.go.ke", desc: { zh: "肯尼亚政府官方招标采购门户", en: "Kenya's government procurement portal" }, tags: ["政府采购"] },
                  { name: "肯尼亚工商会KCCI", url: "https://www.kcci.co.ke", desc: { zh: "肯尼亚全国性商会组织", en: "Kenya's national chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "Yellow Pages Kenya", url: "https://www.yellowpageskenya.com", desc: { zh: "肯尼亚领先企业名录平台", en: "Kenya's leading business directory" }, tags: ["企业名录"] }
                ],
                distribution: [
                  { name: "Kenya Distribution Network", url: "https://www.kenyadistributionnetwork.com", desc: { zh: "肯尼亚最大分销代理匹配平台", en: "Kenya's largest distribution agent matching platform" }, tags: ["分销", "代理"] }
                ]
              }
            },
            {
              id: "tanzania",
              name: { zh: "坦桑尼亚", en: "Tanzania" },
              flag: "TZ",
              channels: {
                official: [
                  { name: "坦桑尼亚贸易部", url: "https://trade.tanzania.go.tz", desc: { zh: "坦桑尼亚政府贸易主管部门", en: "Tanzania's government trade ministry" }, tags: ["官方"] },
                  { name: "坦桑尼亚政府采购平台", url: "https://www.tenders.go.tz", desc: { zh: "坦桑尼亚政府招标采购门户", en: "Tanzania's government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Tanzania B2B", url: "https://www.tanzaniab2b.com", desc: { zh: "坦桑尼亚本土B2B平台", en: "Tanzania's domestic B2B platform" }, tags: ["B2B"] }
                ],
                distribution: []
              }
            },
            {
              id: "ethiopia",
              name: { zh: "埃塞俄比亚", en: "Ethiopia" },
              flag: "ET",
              channels: {
                official: [
                  { name: "埃塞俄比亚贸易和区域一体化部", url: "https://www.motri.gov.et", desc: { zh: "埃塞俄比亚政府贸易主管部门", en: "Ethiopia's government trade ministry" }, tags: ["官方"] },
                  { name: "埃塞俄比亚政府采购平台", url: "https://www.publicprocurement.gov.et", desc: { zh: "埃塞俄比亚政府招标采购门户", en: "Ethiopia's government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Ethiopia B2B", url: "https://www.ethiopiab2b.com", desc: { zh: "埃塞俄比亚本土B2B平台", en: "Ethiopia's domestic B2B platform" }, tags: ["B2B"] }
                ],
                distribution: []
              }
            },
            {
              id: "uganda",
              name: { zh: "乌干达", en: "Uganda" },
              flag: "UG",
              channels: {
                official: [
                  { name: "乌干达贸易部", url: "https://ugandatrades.go.ug", desc: { zh: "乌干达政府贸易主管部门", en: "Uganda's government trade ministry" }, tags: ["官方"] },
                  { name: "乌干达政府采购平台", url: "https://www.ppda.go.ug", desc: { zh: "乌干达政府招标采购门户", en: "Uganda's government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Yellow.ug", url: "https://www.yellow.ug", desc: { zh: "乌干达本土核心企业黄页平台", en: "Uganda's core domestic business yellow pages" }, tags: ["企业名录"] }
                ],
                distribution: []
              }
            }
          ]
        },
        {
          id: "west-africa",
          name: { zh: "西非", en: "West Africa" },
          countries: [
            {
              id: "nigeria",
              name: { zh: "尼日利亚", en: "Nigeria" },
              flag: "NG",
              channels: {
                official: [
                  { name: "尼日利亚联邦贸易和投资部", url: "https://www.fmiti.gov.ng", desc: { zh: "尼日利亚政府官方贸易主管部门，非洲第一大经济体", en: "Nigeria's government trade ministry, Africa's largest economy" }, tags: ["官方"] },
                  { name: "尼日利亚公共采购局BPP平台", url: "https://www.bpp.gov.ng", desc: { zh: "尼日利亚政府官方招标采购门户", en: "Nigeria's government procurement portal" }, tags: ["政府采购"] },
                  { name: "尼日利亚工商会NACCIMA", url: "https://www.naccima.org", desc: { zh: "尼日利亚全国性商会组织", en: "Nigeria's national chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "Nigeria Business Directory", url: "https://www.nigeriabusinessdirectory.com", desc: { zh: "尼日利亚最大企业名录与B2B平台", en: "Nigeria's largest business directory and B2B platform" }, tags: ["企业名录", "B2B"] },
                  { name: "Vconnect", url: "https://www.vconnect.com", desc: { zh: "尼日利亚本土头部B2B与企业黄页平台", en: "Nigeria's leading domestic B2B platform" }, tags: ["B2B", "企业名录"] }
                ],
                distribution: [
                  { name: "Nigeria Distribution Network", url: "https://www.nigeriadistributionnetwork.com", desc: { zh: "尼日利亚最大分销代理匹配平台", en: "Nigeria's largest distribution agent matching platform" }, tags: ["分销", "代理"] }
                ]
              }
            },
            {
              id: "ghana",
              name: { zh: "加纳", en: "Ghana" },
              flag: "GH",
              channels: {
                official: [
                  { name: "加纳贸易和工业部", url: "https://www.mti.gov.gh", desc: { zh: "加纳政府贸易主管部门", en: "Ghana's government trade ministry" }, tags: ["官方"] },
                  { name: "加纳政府采购平台", url: "https://www.ppa.gov.gh", desc: { zh: "加纳政府招标采购门户", en: "Ghana's government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Ghana Yello", url: "https://www.ghanayello.com", desc: { zh: "加纳使用率最高的B2B黄页平台", en: "Ghana's most-used B2B yellow pages" }, tags: ["企业名录", "B2B"] }
                ],
                distribution: []
              }
            }
          ]
        },
        {
          id: "southern-africa",
          name: { zh: "南部非洲", en: "Southern Africa" },
          countries: [
            {
              id: "south-africa",
              name: { zh: "南非", en: "South Africa" },
              flag: "ZA",
              channels: {
                official: [
                  { name: "南非贸易、工业和竞争部", url: "https://www.thedtic.gov.za", desc: { zh: "南非政府官方贸易主管部门，非洲第二大经济体", en: "South Africa's government trade ministry, Africa's second largest economy" }, tags: ["官方"] },
                  { name: "南非政府采购平台", url: "https://www.etenders.gov.za", desc: { zh: "南非政府官方招标采购门户", en: "South Africa's government procurement portal" }, tags: ["政府采购"] },
                  { name: "南非工商会SACCI", url: "https://www.sacci.org.za", desc: { zh: "南非全国性商会组织", en: "South Africa's national chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "South Africa Yellow Pages", url: "https://www.southafricayellowpages.com", desc: { zh: "南非重要B2B商业目录，超25万家企业", en: "South Africa's important B2B directory with 250,000+ companies" }, tags: ["企业名录", "B2B"] },
                  { name: "Bizcommunity", url: "https://www.bizcommunity.com", desc: { zh: "南非知名B2B与行业资讯平台，覆盖南部非洲全区域", en: "South Africa's B2B and industry news platform covering Southern Africa" }, tags: ["B2B", "行业资讯"] }
                ],
                distribution: [
                  { name: "South Africa Distribution Network", url: "https://www.southafricadistributionnetwork.com", desc: { zh: "南非最大分销代理匹配平台", en: "South Africa's largest distribution agent matching platform" }, tags: ["分销", "代理"] }
                ]
              }
            }
          ]
        },
        {
          id: "central-africa",
          name: { zh: "中非", en: "Central Africa" },
          countries: [
            {
              id: "cameroon",
              name: { zh: "喀麦隆", en: "Cameroon" },
              flag: "CM",
              channels: {
                official: [
                  { name: "喀麦隆贸易部", url: "https://www.mincommerce.gov.cm", desc: { zh: "喀麦隆政府贸易主管部门", en: "Cameroon's government trade ministry" }, tags: ["官方"] },
                  { name: "喀麦隆政府采购平台", url: "https://www.marchespublics.gov.cm", desc: { zh: "喀麦隆政府招标采购门户", en: "Cameroon's government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Cameroon Business Pages", url: "https://www.cameroonbusinesspages.com", desc: { zh: "喀麦隆本土B2B平台", en: "Cameroon's domestic B2B platform" }, tags: ["B2B"] }
                ],
                distribution: []
              }
            }
          ]
        }
      ],
      crossborder: [
        { name: "非洲大陆自贸区AfCFTA官方门户", url: "https://www.au-afcfta.org", desc: { zh: "非洲联盟直属非洲大陆自贸区官方平台，覆盖54国14亿人口", en: "AU AfCFTA official platform covering 54 countries, 1.4B people" }, tags: ["官方", "自贸区"] },
        { name: "非洲贸易交易所ATEX", url: "https://www.atex.africa", desc: { zh: "联合国非经委、非盟、非洲进出口银行联合打造的AfCFTA官方B2B/B2G数字贸易平台", en: "UN ECA, AU, Afreximbank joint AfCFTA official B2B platform" }, tags: ["B2B", "官方", "全品类"] },
        { name: "Africa Business Pages (ABP)", url: "https://www.africabusinesspages.com", desc: { zh: "非洲规模最大B2B企业名录，覆盖全非54国200万+企业", en: "Africa's largest B2B directory covering 54 countries, 2M+ companies" }, tags: ["B2B", "企业名录"] },
        { name: "African Distribution Network", url: "https://www.africandistributionnetwork.com", desc: { zh: "非洲最大分销代理匹配平台，超10万家本土分销商数据库", en: "Africa's largest distribution agent matching platform" }, tags: ["分销", "代理"] },
        { name: "Africa Agency Network", url: "https://www.africaagencynetwork.com", desc: { zh: "非洲本土专业代理合作匹配平台，覆盖全非54国", en: "Africa's domestic professional agent platform covering 54 countries" }, tags: ["代理", "分销"] },
        { name: "Africa Yellow Pages Online", url: "https://africayellowpagesonline.com", desc: { zh: "全非洲覆盖最广线上商业黄页，5万+企业", en: "Africa's most extensive online business yellow pages" }, tags: ["企业名录"] }
      ]
    },
    {
      id: "americas",
      name: { zh: "美洲", en: "Americas" },
      nameSort: "A",
      regions: [
        {
          id: "pan-americas",
          name: { zh: "全美洲", en: "Pan-American" },
          countries: []
        },
        {
          id: "north-america",
          name: { zh: "北美", en: "North America" },
          countries: [
            {
              id: "usa",
              name: { zh: "美国", en: "United States" },
              flag: "US",
              channels: {
                official: [
                  { name: "美国商务部国际贸易署ITA", url: "https://www.trade.gov", desc: { zh: "美国政府直属贸易促进机构，中企进入美国市场的官方核心入口", en: "US government trade promotion agency — official core entry for Chinese companies" }, tags: ["官方", "市场准入", "采购商匹配"] },
                  { name: "美国联邦政府采购平台SAM.gov", url: "https://www.sam.gov", desc: { zh: "美国联邦政府官方招标采购门户，年交易额超万亿美元", en: "US federal government procurement portal with $1T+ annual transactions" }, tags: ["政府采购", "招标"] },
                  { name: "美国商会U.S. Chamber of Commerce", url: "https://www.uschamber.com", desc: { zh: "美国最大全国性商会组织，超300万家企业会员", en: "US largest national chamber with 3M+ member companies" }, tags: ["商会"] },
                  { name: "全美制造商协会NAM", url: "https://www.nam.org", desc: { zh: "美国顶级制造业协会，14000+制造企业会员", en: "US top manufacturing association with 14,000+ members" }, tags: ["行业协会", "工业"] }
                ],
                b2b: [
                  { name: "Thomasnet", url: "https://www.thomasnet.com", desc: { zh: "美国工业领域第一B2B平台，成立超120年，50万+供应商", en: "US #1 industrial B2B platform, 120+ years, 500,000+ suppliers" }, tags: ["工业", "B2B", "机械"] },
                  { name: "Amazon Business", url: "https://business.amazon.com", desc: { zh: "亚马逊官方B2B采购平台，拥有超600万企业买家", en: "Amazon B2B platform with 6M+ business buyers" }, tags: ["B2B", "批发", "全品类"] },
                  { name: "Wholesale Central", url: "https://www.wholesalecentral.com", desc: { zh: "美国最大B2B批发平台，超10万家供应商", en: "US largest B2B wholesale platform with 100,000+ suppliers" }, tags: ["批发", "消费品"] },
                  { name: "MFG.com", url: "https://www.mfg.com", desc: { zh: "全球最大制造业定制采购平台", en: "World's largest manufacturing custom procurement platform" }, tags: ["工业", "定制", "机械加工"] },
                  { name: "Yellow Pages USA", url: "https://www.yellowpages.com", desc: { zh: "125年历史美国最老牌企业黄页，超2000万家企业", en: "125-year-old US oldest business yellow pages with 20M+ companies" }, tags: ["企业名录"] },
                  { name: "ImportYeti", url: "https://www.importyeti.com", desc: { zh: "可搜索7000万条美国海关海运记录，精准定位真实进口商", en: "Search 70M US customs records to locate real importers" }, tags: ["海关数据", "采购商开发"] }
                ],
                distribution: [
                  { name: "Distributors.com", url: "https://www.distributors.com", desc: { zh: "美国最大分销代理匹配平台，超20万家本土分销商数据库", en: "US largest distribution agent matching platform" }, tags: ["分销", "代理"] },
                  { name: "RepHunter", url: "https://www.rephunter.net", desc: { zh: "美国知名销售代理、分销代理匹配平台，超3万家代理资源", en: "US well-known sales and distribution agent platform" }, tags: ["代理", "分销"] },
                  { name: "USA Distribution Network", url: "https://www.usadistributionnetwork.com", desc: { zh: "美国专业分销代理对接平台", en: "US professional distribution agent matching platform" }, tags: ["分销", "代理"] }
                ]
              }
            },
            {
              id: "canada",
              name: { zh: "加拿大", en: "Canada" },
              flag: "CA",
              channels: {
                official: [
                  { name: "加拿大全球事务部国际贸易署", url: "https://www.international.gc.ca", desc: { zh: "加拿大政府直属贸易促进机构", en: "Canadian government international trade agency" }, tags: ["官方"] },
                  { name: "加拿大联邦政府采购平台Buyandsell.gc.ca", url: "https://buyandsell.gc.ca", desc: { zh: "加拿大政府官方招标采购门户", en: "Canadian federal government procurement portal" }, tags: ["政府采购"] },
                  { name: "加拿大商会Canadian Chamber of Commerce", url: "https://www.chamber.ca", desc: { zh: "加拿大全国性商会组织，超20万家企业会员", en: "Canadian national chamber with 200,000+ members" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "YP Canada", url: "https://www.yellowpages.ca", desc: { zh: "加拿大老牌企业黄页，超千万家企业", en: "Canada's established business yellow pages with 10M+ companies" }, tags: ["企业名录"] },
                  { name: "Scott's Directories", url: "https://www.scottsdirectories.com", desc: { zh: "加拿大最大经核实企业数据库，90万+家公司", en: "Canada's largest verified business database" }, tags: ["企业名录", "B2B"] },
                  { name: "Canada Business Directory", url: "https://www.canadianbusinessdirectory.ca", desc: { zh: "加拿大本土头部B2B平台", en: "Canada's leading domestic B2B platform" }, tags: ["B2B"] }
                ],
                distribution: [
                  { name: "Canada Distribution Network", url: "https://www.canadadistributionnetwork.com", desc: { zh: "加拿大最大分销代理匹配平台", en: "Canada's largest distribution agent matching platform" }, tags: ["分销", "代理"] }
                ]
              }
            },
            {
              id: "mexico",
              name: { zh: "墨西哥", en: "Mexico" },
              flag: "MX",
              channels: {
                official: [
                  { name: "墨西哥经济部", url: "https://www.economia.gob.mx", desc: { zh: "墨西哥政府官方贸易主管部门，USMCA成员国", en: "Mexican government trade ministry, USMCA member" }, tags: ["官方"] },
                  { name: "墨西哥联邦政府采购平台Compranet", url: "https://www.gob.mx/compranet", desc: { zh: "墨西哥政府官方招标采购门户", en: "Mexican government procurement portal" }, tags: ["政府采购"] },
                  { name: "墨西哥全国工商会CONCANACO", url: "https://www.concanaco.com.mx", desc: { zh: "墨西哥全国性商会组织", en: "Mexican national chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "Mercado Libre Business Mexico", url: "https://www.mercadolibre.com.mx/empresas", desc: { zh: "拉美最大电商平台墨西哥B2B分站", en: "Latin America's largest e-commerce platform Mexico B2B division" }, tags: ["B2B", "消费品"] },
                  { name: "SeccionAmarilla", url: "https://www.seccionamarilla.com.mx", desc: { zh: "墨西哥官方黄页，覆盖全国各地企业", en: "Mexico's official yellow pages covering companies nationwide" }, tags: ["企业名录"] }
                ],
                distribution: [
                  { name: "Mexico Distribution Network", url: "https://www.mexicodistributionnetwork.com", desc: { zh: "墨西哥最大分销代理匹配平台", en: "Mexico's largest distribution agent matching platform" }, tags: ["分销", "代理"] }
                ]
              }
            }
          ]
        },
        {
          id: "central-america-caribbean",
          name: { zh: "中美洲与加勒比", en: "Central America & Caribbean" },
          countries: [
            {
              id: "panama",
              name: { zh: "巴拿马", en: "Panama" },
              flag: "PA",
              channels: {
                official: [
                  { name: "巴拿马工商部", url: "https://www.mici.gob.pa", desc: { zh: "巴拿马政府贸易主管部门", en: "Panama government industry and commerce ministry" }, tags: ["官方"] },
                  { name: "巴拿马政府采购平台", url: "https://www.panamacompra.gob.pa", desc: { zh: "巴拿马政府招标采购门户", en: "Panama government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Panama Yellow Pages", url: "https://www.panamayellowpages.com", desc: { zh: "巴拿马本土B2B平台", en: "Panama's domestic B2B platform" }, tags: ["企业名录"] }
                ],
                distribution: []
              }
            },
            {
              id: "dominican",
              name: { zh: "多米尼加", en: "Dominican Republic" },
              flag: "DO",
              channels: {
                official: [
                  { name: "多米尼加工商业部", url: "https://www.micm.gob.do", desc: { zh: "多米尼加政府贸易主管部门", en: "Dominican Republic government industry and commerce ministry" }, tags: ["官方"] }
                ],
                b2b: [
                  { name: "Dominican Yellow Pages", url: "https://www.dominicanyellowpages.com", desc: { zh: "多米尼加本土B2B平台", en: "Dominican Republic's domestic B2B platform" }, tags: ["企业名录"] }
                ],
                distribution: []
              }
            }
          ]
        },
        {
          id: "south-america",
          name: { zh: "南美洲", en: "South America" },
          countries: [
            {
              id: "brazil",
              name: { zh: "巴西", en: "Brazil" },
              flag: "BR",
              channels: {
                official: [
                  { name: "巴西经济部外贸秘书处SECEX", url: "https://www.gov.br/economia/pt-br/assuntos/secex", desc: { zh: "巴西政府官方贸易主管部门，拉美第一大经济体", en: "Brazilian government trade ministry, Latin America's largest economy" }, tags: ["官方"] },
                  { name: "巴西联邦政府采购平台", url: "https://www.gov.br/compras/pt-br", desc: { zh: "巴西政府官方招标采购门户", en: "Brazilian federal government procurement portal" }, tags: ["政府采购"] },
                  { name: "巴西全国工业联合会CNI", url: "https://www.cni.org.br", desc: { zh: "巴西顶级工业协会", en: "Brazil's top industry association" }, tags: ["行业协会"] }
                ],
                b2b: [
                  { name: "B2Brazil", url: "https://www.b2brazil.com", desc: { zh: "巴西最知名本土B2B平台，19万注册公司会员", en: "Brazil's most well-known domestic B2B platform" }, tags: ["B2B", "全品类"] },
                  { name: "Mercado Livre Business Brazil", url: "https://www.mercadolivre.com.br/empresas", desc: { zh: "拉美最大电商巴西B2B分站", en: "Latin America's largest e-commerce Brazil B2B division" }, tags: ["B2B", "消费品"] },
                  { name: "GuiaMais", url: "https://www.guiamais.com.br", desc: { zh: "巴西本土最大企业搜索门户，数百万家企业", en: "Brazil's largest domestic business search portal" }, tags: ["企业名录"] }
                ],
                distribution: [
                  { name: "Brazil Distribution Network", url: "https://www.brazildistributionnetwork.com", desc: { zh: "巴西最大分销代理匹配平台", en: "Brazil's largest distribution agent matching platform" }, tags: ["分销", "代理"] }
                ]
              }
            },
            {
              id: "argentina",
              name: { zh: "阿根廷", en: "Argentina" },
              flag: "AR",
              channels: {
                official: [
                  { name: "阿根廷生产发展部", url: "https://www.produccion.gob.ar", desc: { zh: "阿根廷政府官方贸易主管部门", en: "Argentina's government production development ministry" }, tags: ["官方"] },
                  { name: "阿根廷政府采购平台", url: "https://www.mercadopublico.gob.ar", desc: { zh: "阿根廷政府招标采购门户", en: "Argentina's government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Amarillas Argentina", url: "https://www.amarillas.com.ar", desc: { zh: "阿根廷本土B2B平台", en: "Argentina's domestic B2B platform" }, tags: ["B2B"] }
                ],
                distribution: []
              }
            },
            {
              id: "chile",
              name: { zh: "智利", en: "Chile" },
              flag: "CL",
              channels: {
                official: [
                  { name: "智利外交部国际经济关系总局", url: "https://www.direcon.gob.cl", desc: { zh: "智利政府贸易促进机构", en: "Chile's government trade promotion agency" }, tags: ["官方"] },
                  { name: "智利政府采购平台", url: "https://www.mercadopublico.cl", desc: { zh: "智利政府招标采购门户", en: "Chile's government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Mercantil", url: "https://www.mercantil.com", desc: { zh: "智利最大B2B平台，20多年历史，支持中文界面", en: "Chile's largest B2B platform, 20+ years, supports Chinese" }, tags: ["B2B", "全品类"] }
                ],
                distribution: []
              }
            },
            {
              id: "colombia",
              name: { zh: "哥伦比亚", en: "Colombia" },
              flag: "CO",
              channels: {
                official: [
                  { name: "哥伦比亚贸易、工业和旅游部", url: "https://www.mincit.gov.co", desc: { zh: "哥伦比亚政府贸易主管部门", en: "Colombia's government trade ministry" }, tags: ["官方"] },
                  { name: "哥伦比亚政府采购平台", url: "https://www.colombiacompra.gov.co", desc: { zh: "哥伦比亚政府招标采购门户", en: "Colombia's government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Colombia Business Directory", url: "https://www.colombiabusinessdirectory.com", desc: { zh: "哥伦比亚本土B2B平台", en: "Colombia's domestic B2B platform" }, tags: ["B2B"] }
                ],
                distribution: []
              }
            },
            {
              id: "peru",
              name: { zh: "秘鲁", en: "Peru" },
              flag: "PE",
              channels: {
                official: [
                  { name: "秘鲁外贸和旅游部", url: "https://www.mincetur.gob.pe", desc: { zh: "秘鲁政府外贸旅游主管部门", en: "Peru's government foreign trade and tourism ministry" }, tags: ["官方"] },
                  { name: "秘鲁政府采购平台", url: "https://www.perucompras.gob.pe", desc: { zh: "秘鲁政府招标采购门户", en: "Peru's government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Perupymes", url: "https://www.perupymes.com", desc: { zh: "秘鲁中小企业核心B2B平台", en: "Peru's core SME B2B platform" }, tags: ["B2B", "中小企业"] }
                ],
                distribution: []
              }
            }
          ]
        }
      ],
      crossborder: [
        { name: "ConnectAmericas", url: "https://www.connectamericas.com", desc: { zh: "美洲开发银行官方B2B贸易平台，覆盖美洲35国50万+认证企业", en: "IDB official B2B trade platform covering 35 countries" }, tags: ["B2B", "官方", "全品类"] },
        { name: "Americas Business Pages", url: "https://www.americasbusinesspages.com", desc: { zh: "美洲规模最大B2B企业名录，覆盖35国200万+企业", en: "Americas largest B2B directory covering 35 countries, 2M+ companies" }, tags: ["B2B", "企业名录"] },
        { name: "Americas Distribution Network", url: "https://www.americasdistributionnetwork.com", desc: { zh: "美洲最大分销代理匹配平台，超10万家本土分销商", en: "Americas largest distribution agent matching platform" }, tags: ["分销", "代理"] },
        { name: "Americas Agency Network", url: "https://www.americasagencynetwork.com", desc: { zh: "美洲本土专业代理合作匹配平台，覆盖35国", en: "Americas professional agent platform covering 35 countries" }, tags: ["代理", "分销"] },
        { name: "QuimiNet Latin America", url: "http://www.quiminet.com/latam", desc: { zh: "拉丁美洲最大垂直B2B平台，覆盖拉美24国", en: "Latin America's largest vertical B2B platform covering 24 countries" }, tags: ["B2B", "化工", "工业"] }
      ]
    },
    {
      id: "oceania",
      name: { zh: "大洋洲", en: "Oceania" },
      nameSort: "O",
      regions: [
        {
          id: "pan-oceania",
          name: { zh: "泛大洋洲", en: "Pan-Oceania" },
          countries: []
        },
        {
          id: "australia-region",
          name: { zh: "澳大利亚", en: "Australia" },
          countries: [
            {
              id: "australia",
              name: { zh: "澳大利亚", en: "Australia" },
              flag: "AU",
              channels: {
                official: [
                  { name: "澳大利亚贸易投资委员会Austrade", url: "https://www.austrade.gov.au", desc: { zh: "澳大利亚联邦政府直属贸易投资促进机构，中企进入澳大利亚市场的官方核心入口", en: "Australian government trade commission — official core entry for Chinese companies" }, tags: ["官方", "市场准入", "采购商匹配"] },
                  { name: "AusTender", url: "https://www.tenders.gov.au", desc: { zh: "澳大利亚联邦政府官方招标采购门户，整合全澳政府采购资源", en: "Australian federal government procurement portal" }, tags: ["政府采购", "招标"] },
                  { name: "澳大利亚工商会ACCI", url: "https://www.acci.asn.au", desc: { zh: "澳大利亚最大全国性商会组织，超30万家企业会员", en: "Australia's largest national chamber with 300,000+ members" }, tags: ["商会"] },
                  { name: "澳大利亚商业注册局ABR", url: "https://abr.gov.au", desc: { zh: "澳大利亚政府官方商业注册信息平台", en: "Australian government business registration platform" }, tags: ["官方", "企业查询"] }
                ],
                b2b: [
                  { name: "IndustrySearch", url: "https://www.industrysearch.com.au", desc: { zh: "澳大利亚本土工业领域第一B2B平台", en: "Australia's #1 domestic industrial B2B platform" }, tags: ["工业", "B2B", "机械"] },
                  { name: "Yellow Pages Australia", url: "https://www.yellowpages.com.au", desc: { zh: "澳大利亚最大企业黄页平台，超175万本土企业", en: "Australia's largest business yellow pages with 1.75M+ companies" }, tags: ["企业名录", "批发商"] },
                  { name: "Amazon Business Australia", url: "https://business.amazon.com.au", desc: { zh: "亚马逊官方B2B采购平台，超百万澳大利亚企业买家", en: "Amazon B2B platform with 1M+ Australian buyers" }, tags: ["B2B", "批发"] },
                  { name: "Wholesale Central Australia", url: "https://www.wholesalecentral.com.au", desc: { zh: "澳大利亚最大B2B批发平台，超10万家供应商", en: "Australia's largest B2B wholesale platform" }, tags: ["批发", "消费品"] },
                  { name: "Ferret", url: "https://www.ferret.com.au", desc: { zh: "澳大利亚老牌工业B2B平台，超20万家工业企业", en: "Australia's established industrial B2B platform" }, tags: ["工业", "B2B"] }
                ],
                distribution: [
                  { name: "Distributors.com Australia", url: "https://www.distributors.com/australia", desc: { zh: "澳大利亚最大分销代理匹配平台，超10万家本土分销商数据库", en: "Australia's largest distribution agent matching platform" }, tags: ["分销", "代理"] },
                  { name: "RepHunter Australia", url: "https://www.rephunter.net.au", desc: { zh: "澳大利亚知名销售代理、分销代理匹配平台", en: "Australia's well-known sales and distribution agent platform" }, tags: ["代理", "分销"] },
                  { name: "Australian Distribution Network", url: "https://www.australiandistributorsnetwork.com", desc: { zh: "澳大利亚专业分销代理对接平台", en: "Australia's professional distribution agent matching platform" }, tags: ["分销", "代理"] }
                ]
              }
            },
            {
              id: "new-zealand",
              name: { zh: "新西兰", en: "New Zealand" },
              flag: "NZ",
              channels: {
                official: [
                  { name: "新西兰贸易发展局NZTE", url: "https://www.nzte.govt.nz", desc: { zh: "新西兰政府直属贸易促进机构，中企进入新西兰市场的官方核心入口", en: "New Zealand government trade development agency" }, tags: ["官方", "市场准入"] },
                  { name: "GETS", url: "https://www.gets.govt.nz", desc: { zh: "新西兰政府官方电子招标采购服务平台", en: "New Zealand government e-procurement platform" }, tags: ["政府采购"] },
                  { name: "新西兰工商会NZBC", url: "https://www.nzchamber.co.nz", desc: { zh: "新西兰全国性商会组织", en: "New Zealand's national chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "Trade Me Business", url: "https://www.trademe.co.nz/business", desc: { zh: "新西兰本土最大线上交易平台，近八成新西兰企业在此交易", en: "New Zealand's largest domestic online platform used by ~80% of NZ businesses" }, tags: ["B2B", "全品类"] },
                  { name: "Yellow NZ", url: "https://yellow.co.nz", desc: { zh: "新西兰最具影响力的本地企业名录平台", en: "New Zealand's most influential local business directory" }, tags: ["企业名录"] },
                  { name: "New Zealand Business Directory", url: "https://www.nzbusinessdirectory.co.nz", desc: { zh: "新西兰本土头部B2B平台", en: "New Zealand's leading domestic B2B platform" }, tags: ["B2B"] }
                ],
                distribution: [
                  { name: "New Zealand Distribution Network", url: "https://www.nzdistributionnetwork.co.nz", desc: { zh: "新西兰最大分销代理匹配平台", en: "New Zealand's largest distribution agent matching platform" }, tags: ["分销", "代理"] }
                ]
              }
            }
          ]
        },
        {
          id: "pacific-islands",
          name: { zh: "南太平洋岛国", en: "Pacific Islands" },
          countries: [
            {
              id: "fiji",
              name: { zh: "斐济", en: "Fiji" },
              flag: "FJ",
              channels: {
                official: [
                  { name: "斐济贸易和投资部", url: "https://www.trade.gov.fj", desc: { zh: "斐济政府官方贸易主管部门", en: "Fiji government trade and investment ministry" }, tags: ["官方"] },
                  { name: "斐济政府采购平台", url: "https://www.tenders.gov.fj", desc: { zh: "斐济政府招标采购门户", en: "Fiji government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Fiji Business Pages", url: "https://www.fijibusinesspages.com", desc: { zh: "斐济本土B2B平台", en: "Fiji's domestic B2B platform" }, tags: ["B2B"] }
                ],
                distribution: []
              }
            },
            {
              id: "papua-new-guinea",
              name: { zh: "巴布亚新几内亚", en: "Papua New Guinea" },
              flag: "PG",
              channels: {
                official: [
                  { name: "巴新工业与贸易部", url: "https://www.industryandtrade.gov.pg", desc: { zh: "巴布亚新几内亚政府官方贸易主管部门", en: "PNG government industry and trade ministry" }, tags: ["官方"] },
                  { name: "巴新政府采购平台", url: "https://www.pngprocurement.gov.pg", desc: { zh: "巴布亚新几内亚政府招标采购门户", en: "PNG government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "PNG Business Directory", url: "https://www.pngbusinessdirectory.com", desc: { zh: "巴布亚新几内亚本土B2B平台", en: "Papua New Guinea's domestic B2B platform" }, tags: ["B2B"] }
                ],
                distribution: []
              }
            }
          ]
        }
      ],
      crossborder: [
        { name: "太平洋岛国论坛贸易门户", url: "https://www.forumsec.org/trade", desc: { zh: "太平洋岛国论坛官方贸易平台，覆盖14个南太平洋岛国+澳新", en: "Pacific Islands Forum official trade platform covering 14 island nations" }, tags: ["官方", "贸易政策"] },
        { name: "亚洲开发银行太平洋采购平台", url: "https://www.adb.org/procurement", desc: { zh: "亚洲开发银行官方招标采购门户，覆盖太平洋岛国各类贷款项目", en: "ADB official procurement portal covering Pacific island projects" }, tags: ["政府采购", "基建"] },
        { name: "联合国全球采购市场大洋洲专区", url: "https://www.ungm.org/Region/Oceania", desc: { zh: "联合国官方采购平台大洋洲专区", en: "UN global procurement market Oceania section" }, tags: ["政府采购"] },
        { name: "Oceania Distribution Network", url: "https://www.oceaniadistributionnetwork.com", desc: { zh: "大洋洲最大分销代理匹配平台，超5万家本土分销商数据库", en: "Oceania's largest distribution agent matching platform" }, tags: ["分销", "代理"] },
        { name: "Oceania Business Pages", url: "https://www.oceaniabusinesspages.com", desc: { zh: "大洋洲最大B2B企业名录，覆盖20+国家超100万企业", en: "Oceania's largest B2B directory covering 20+ countries, 1M+ companies" }, tags: ["B2B", "企业名录"] }
      ]
    }
  ]
};

// Now replace the data in index.html
const html = fs.readFileSync('index.html', 'utf8');

// Find the TRADEDATA block start and end
const dataStart = html.indexOf('const TRADEDATA = {');
const dataEnd = html.lastIndexOf('};');

// Extract the asia continent from current html
const asiaStart = html.indexOf('{ id: "asia",');
// Find where europe starts to know where asia ends
const europeIdx = html.indexOf('{ id: "europe",');
const asiaBlock = html.slice(asiaStart, europeIdx);

// Build new full TRADEDATA with asia + new continents
const newData = `const TRADEDATA = {
  continents: [
    ${asiaBlock.trim()}
    ,
    ${JSON.stringify(TRADEDATA.continents[0], null, 0).replace(/\n/g, '\n').slice(0, 0)}
  ]
};`.trim();

// Actually, let me just construct the JS directly
// Replace the TRADEDATA block
const asiaSnippet = html.slice(asiaStart, europeIdx).trim();
let trailing = html.slice(europeIdx);
const dataBlockEnd = trailing.indexOf('  ];');
let rest = trailing.slice(dataBlockEnd + 4).trim();

const newDataBlock = '    ' + asiaSnippet + ',\n' +
  JSON.stringify(TRADEDATA.continents[0], null, 4).slice(1, -1).replace(/^/gm, '    ') +
  '\n  ];' + '\n' + rest;

const newHtml = html.slice(0, dataStart) + 'const TRADEDATA = {\n  continents: [\n' + newDataBlock + '\n</script>';

fs.writeFileSync('index.html', newHtml, 'utf8');
console.log('Done! index.html updated');
