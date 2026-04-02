// TradeRoot — GlobalTrade Navigator Data
// All channel data structured as: Continent → Region → Country → Channel Type → Channels
// Channel types: official | b2b | distribution | crossborder

const TRADEDATA = {
  continents: [
    {
      id: "asia",
      name: { zh: "亚洲", en: "Asia" },
      nameSort: "A",
      regions: [
        {
          id: "east-asia",
          name: { zh: "东亚", en: "East Asia" },
          countries: [
            {
              id: "japan",
              name: { zh: "日本", en: "Japan" },
              flag: "JP",
              channels: {
                official: [
                  { name: "日本贸易振兴机构JETRO", url: "https://www.jetro.go.jp", desc: { zh: "日本政府直属贸易促进机构，全品类企业进入日本市场的官方核心入口，适配采购商匹配、代理分销对接、合规咨询、展会对接全流程", en: "Japan's official trade promotion agency, the core government-backed entry point for all industries entering the Japanese market" }, tags: ["全品类", "采购商匹配", "官方"] },
                  { name: "日本政府电子采购平台JPPS", url: "https://www.jpps.go.jp", desc: { zh: "日本中央/地方政府、公立机构官方招标采购门户", en: "Official procurement portal for Japanese central and local government agencies" }, tags: ["政府采购", "招标"] },
                  { name: "日本商工会议所JCCI", url: "https://www.jcci.or.jp", desc: { zh: "日本全国性商会组织，覆盖全日本47个都道府县，适配对接日本本土中小零售商、批发商、代理商资源", en: "Japan's nationwide chamber of commerce covering all 47 prefectures" }, tags: ["商会", "零售", "批发"] }
                ],
                b2b: [
                  { name: "SUPER DELIVERY", url: "https://www.superdelivery.com", desc: { zh: "日本规模最大的B2B批发平台，合作超2900家厂商，入驻超22万家零售企业", en: "Japan's largest B2B wholesale platform with 2,900+ manufacturers and 220,000+ retailers" }, tags: ["批发", "零售", "家居", "美妆"] },
                  { name: "NETSEA", url: "https://www.netsea.jp", desc: { zh: "日本头部本土B2B批发平台，连接5000+供应商与50万+日本零售商", en: "Top Japanese B2B wholesale platform connecting 5,000+ suppliers with 500,000+ Japanese retailers" }, tags: ["批发", "服饰", "日用品"] },
                  { name: "TradeWilly", url: "https://tradewilly.com", desc: { zh: "专为中国供应商打造的日本跨境B2B平台，全中文界面", en: "Cross-border B2B platform designed for Chinese suppliers with full Chinese-language interface" }, tags: ["跨境", "中文", "消费类"] },
                  { name: "iPROS", url: "https://www.ipros.jp", desc: { zh: "日本工业制造领域头部B2B平台，汇聚大量制造企业的定向采购需求", en: "Top Japanese B2B platform for industrial manufacturing with targeted procurement needs" }, tags: ["工业", "机械", "电子"] }
                ],
                distribution: [
                  { name: "代理店ナビ", url: "https://dairiten-navi.com", desc: { zh: "日本最大的代理店招募专属平台，覆盖全行业的代理、分销、加盟合作需求", en: "Japan's largest platform dedicated to agent recruitment covering all industries" }, tags: ["代理", "分销", "加盟"] },
                  { name: "ビジネスマッチング.JP", url: "https://business-matching.jp", desc: { zh: "日本本土专业商务匹配平台，专注于代理店招募、分销合作、OEM/ODM供需对接", en: "Professional business matching platform for agent recruitment and distribution partnerships" }, tags: ["代理", "OEM", "商务匹配"] }
                ]
              }
            },
            {
              id: "korea",
              name: { zh: "韩国", en: "South Korea" },
              flag: "KR",
              channels: {
                official: [
                  { name: "大韩贸易投资振兴公社KOTRA", url: "https://www.kotra.or.kr", desc: { zh: "韩国政府直属贸易促进机构，适配采购商匹配、代理分销对接、合规咨询全流程", en: "Korean government trade promotion agency for buyer matching and agent connections" }, tags: ["全品类", "采购商匹配", "官方"] },
                  { name: "韩国政府电子采购平台G2B", url: "https://www.g2b.go.kr", desc: { zh: "韩国公共采购厅运营的官方政府采购门户", en: "Official government procurement portal operated by Korea's Public Procurement Service" }, tags: ["政府采购", "招标"] },
                  { name: "TradeKorea", url: "https://www.tradekorea.com", desc: { zh: "韩国官方背景顶级B2B国际贸易平台，超7万家会员企业", en: "Top B2B international trade platform backed by Korean government with 70,000+ member companies" }, tags: ["B2B", "会员", "全品类"] },
                  { name: "韩国商会KCCI", url: "https://www.korcham.net", desc: { zh: "韩国全国性商会组织，适配对接韩国本土批发商、零售商、进口商、代理商", en: "Korea's nationwide chamber of commerce connecting with wholesalers, retailers, and importers" }, tags: ["商会", "批发", "零售"] }
                ],
                b2b: [
                  { name: "EC21", url: "https://www.ec21.com", desc: { zh: "韩国老牌顶级B2B平台，全球知名度高，支持8种语言", en: "Korea's long-established top B2B platform with global reach and 8-language support" }, tags: ["工业", "消费品", "多语言"] },
                  { name: "ECPlaza", url: "https://www.ecplaza.com", desc: { zh: "韩国头部B2B平台，超400万注册会员，覆盖全球220多个国家和地区", en: "Leading Korean B2B platform with 4M+ members across 220+ countries" }, tags: ["B2B", "全品类", "全球"] },
                  { name: "BuyKorea", url: "https://www.buykorea.or.kr", desc: { zh: "KOTRA官方运营的B2B跨境平台，官方背书，企业资质审核严格", en: "KOTRA-operated cross-border B2B platform with strict enterprise verification" }, tags: ["跨境", "官方", "全品类"] },
                  { name: "Gmarket Business", url: "https://b2b.gmarket.co.kr", desc: { zh: "韩国最大电商平台Gmarket旗下B2B批发板块", en: "B2B wholesale section of Korea's largest e-commerce platform Gmarket" }, tags: ["批发", "电商", "消费品"] }
                ],
                distribution: [
                  { name: "Agency Navi（에이전시 네비）", url: "https://agency-navi.co.kr", desc: { zh: "韩国本土专业的代理招募与分销合作平台", en: "Professional Korean platform for agent recruitment and distribution partnerships" }, tags: ["代理", "分销"] },
                  { name: "Business Matching Korea", url: "https://businesskorea.co.kr", desc: { zh: "韩国头部商务匹配平台，专注中韩企业供需对接、代理分销合作", en: "Top Korean business matching platform specializing in Korea-China trade connections" }, tags: ["商务匹配", "中韩", "代理"] }
                ]
              }
            },
            {
              id: "hong-kong",
              name: { zh: "中国香港", en: "Hong Kong" },
              flag: "HK",
              channels: {
                official: [
                  { name: "香港贸易发展局HKTDC", url: "https://www.hktdc.com", desc: { zh: "香港政府直属贸易促进机构，旗下「贸发网采购」是亚洲顶级B2B采购平台", en: "Hong Kong government trade promotion agency with Asia's top B2B sourcing platform" }, tags: ["官方", "B2B", "亚洲"] },
                  { name: "香港中华总商会CGCC", url: "https://www.cgcc.org.hk", desc: { zh: "香港最大、最具影响力的商会组织", en: "Hong Kong's largest and most influential chamber of commerce" }, tags: ["商会", "进口商", "分销"] }
                ],
                b2b: [
                  { name: "环球资源Global Sources", url: "https://www.globalsources.com", desc: { zh: "亚洲老牌顶级B2B平台，深耕电子、家居、礼品、时尚品类", en: "Long-established Asian B2B platform specializing in electronics, home, gifts and fashion" }, tags: ["B2B", "电子", "展会"] }
                ],
                distribution: []
              }
            },
            {
              id: "taiwan",
              name: { zh: "中国台湾", en: "Taiwan" },
              flag: "TW",
              channels: {
                official: [
                  { name: "台湾贸易中心TAITRA", url: "https://www.taitra.org.tw", desc: { zh: "台湾地区官方贸易促进机构", en: "Taiwan's official trade promotion organization" }, tags: ["官方", "贸易促进"] },
                  { name: "Taiwantrade", url: "https://www.taiwantrade.com", desc: { zh: "台湾官方B2B平台", en: "Taiwan's official B2B platform" }, tags: ["B2B", "官方"] }
                ],
                b2b: [
                  { name: "文笔天天网ttnet", url: "https://www.ttnet.net", desc: { zh: "台湾地区头部B2B平台，深耕工业制造、五金机械、电子元器件品类", en: "Taiwan's leading B2B platform for industrial manufacturing and electronics" }, tags: ["B2B", "工业", "五金"] }
                ],
                distribution: []
              }
            },
            {
              id: "mongolia",
              name: { zh: "蒙古", en: "Mongolia" },
              flag: "MN",
              channels: {
                official: [
                  { name: "蒙古国家工商会MNCCI", url: "https://www.mncci.mn", desc: { zh: "蒙古全国性官方商会组织", en: "Mongolia's national chamber of commerce" }, tags: ["商会", "官方"] },
                  { name: "蒙古政府采购电子平台", url: "https://www.eprocurement.gov.mn", desc: { zh: "蒙古政府官方招标采购门户", en: "Mongolia's official government e-procurement portal" }, tags: ["政府采购", "招标"] }
                ],
                b2b: [
                  { name: "B2B Mongolia", url: "https://www.b2bmongolia.com", desc: { zh: "蒙古本土头部B2B平台，覆盖矿产、建材、机械、食品全品类", en: "Mongolia's leading B2B platform covering minerals, construction, machinery, and food" }, tags: ["B2B", "矿产", "工业"] }
                ],
                distribution: []
              }
            }
          ]
        },
        {
          id: "southeast-asia",
          name: { zh: "东南亚", en: "Southeast Asia" },
          countries: [
            {
              id: "singapore",
              name: { zh: "新加坡", en: "Singapore" },
              flag: "SG",
              channels: {
                official: [
                  { name: "新加坡企业发展局EnterpriseSG", url: "https://www.enterprisesg.gov.sg", desc: { zh: "新加坡政府直属贸易促进机构，是中国企业进入新加坡及东南亚市场的官方核心入口", en: "Singapore government trade agency — the official core entry point for Chinese companies entering Singapore and Southeast Asia" }, tags: ["官方", "贸易促进", "东南亚"] },
                  { name: "新加坡工商联合总会SBF", url: "https://www.sbf.org.sg", desc: { zh: "新加坡全国性商会组织，拥有超27000家企业会员", en: "Singapore's national business chamber with 27,000+ member companies" }, tags: ["商会", "会员"] },
                  { name: "新加坡政府电子采购平台GeBIZ", url: "https://www.gebiz.gov.sg", desc: { zh: "新加坡政府官方招标采购门户", en: "Singapore government's official tender portal" }, tags: ["政府采购", "招标"] }
                ],
                b2b: [
                  { name: "ASEAN-Connect", url: "https://asean-connect.com", desc: { zh: "东盟最大企业名录平台，覆盖东盟10国2200万+企业", en: "Largest ASEAN business directory covering 22M+ companies across 10 ASEAN countries" }, tags: ["东盟", "企业名录", "全品类"] },
                  { name: "Singapore Business Directory", url: "https://www.singaporebusinessdirectory.sg", desc: { zh: "新加坡权威企业名录平台", en: "Singapore's authoritative business directory" }, tags: ["企业名录", "批发商"] },
                  { name: "Abraa", url: "https://www.abraa.com", desc: { zh: "总部位于新加坡的东南亚头部B2B平台", en: "Singapore-headquartered leading B2B platform for Southeast Asia and Middle East" }, tags: ["B2B", "东南亚", "中东"] }
                ],
                distribution: []
              }
            },
            {
              id: "thailand",
              name: { zh: "泰国", en: "Thailand" },
              flag: "TH",
              channels: {
                official: [
                  { name: "泰国商务部国际贸易促进司DITP", url: "https://www.ditp.go.th", desc: { zh: "泰国政府官方贸易促进机构，旗下Thaitrade是泰国官方B2B平台，拥有25万+企业会员", en: "Thailand's official trade promotion agency with official B2B platform Thaitrade" }, tags: ["官方", "B2B", "中文"] },
                  { name: "泰国政府电子采购平台Thai-GP", url: "https://www.thaigp.go.th", desc: { zh: "泰国政府官方招标采购门户", en: "Thailand's official government tender portal" }, tags: ["政府采购", "招标"] },
                  { name: "泰国总商会TCC", url: "https://www.thaichamber.org", desc: { zh: "泰国全国性商会组织", en: "Thailand's national chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "Yellow Pages Thailand", url: "https://www.yellowpages.co.th", desc: { zh: "泰国权威企业名录平台，拥有40万+企业数据", en: "Thailand's authoritative business directory with 400,000+ company records" }, tags: ["企业名录", "建筑", "机电"] },
                  { name: "ECThai", url: "https://www.ecthai.com", desc: { zh: "泰国本土头部B2B平台", en: "Thailand's leading domestic B2B platform" }, tags: ["B2B", "工业", "消费品"] },
                  { name: "Bizgate Thailand", url: "https://www.bizgate.org.th", desc: { zh: "泰国工业部旗下B2B平台，官方背景", en: "B2B platform under Thailand's Ministry of Industry with official backing" }, tags: ["工业", "官方"] }
                ],
                distribution: []
              }
            },
            {
              id: "vietnam",
              name: { zh: "越南", en: "Vietnam" },
              flag: "VN",
              channels: {
                official: [
                  { name: "越南工业贸易部MOIT", url: "https://www.moit.gov.vn", desc: { zh: "越南政府官方贸易主管部门", en: "Vietnam's official trade administration" }, tags: ["官方", "贸易"] },
                  { name: "越南政府电子采购平台VGP", url: "https://procurement.gov.vn", desc: { zh: "越南政府官方招标采购门户", en: "Vietnam's official government e-procurement portal" }, tags: ["政府采购", "招标"] },
                  { name: "越南工商会VCCI", url: "https://www.vcci.com.vn", desc: { zh: "越南全国性官方商会组织", en: "Vietnam's national chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "Bizviet", url: "https://www.bizviet.net", desc: { zh: "越南本土头部B2B平台，聚焦电子、建材、照明、机械品类", en: "Vietnam's leading domestic B2B platform for electronics, construction, and machinery" }, tags: ["B2B", "工业", "消费类"] },
                  { name: "Yellow Pages Vietnam", url: "https://www.yellowpages.com.vn", desc: { zh: "越南最大企业名录平台，拥有25万+企业数据", en: "Vietnam's largest business directory with 250,000+ company records" }, tags: ["企业名录"] },
                  { name: "Vietoffer", url: "https://www.vietoffer.com", desc: { zh: "越南本土老牌B2B平台，覆盖全品类", en: "Vietnam's established B2B platform covering all industries" }, tags: ["B2B", "全品类"] }
                ],
                distribution: []
              }
            },
            {
              id: "indonesia",
              name: { zh: "印度尼西亚", en: "Indonesia" },
              flag: "ID",
              channels: {
                official: [
                  { name: "印尼贸易部", url: "https://www.kemendag.go.id", desc: { zh: "印尼政府官方贸易主管部门", en: "Indonesia's official trade ministry" }, tags: ["官方"] },
                  { name: "Indonesia Trade", url: "https://www.indonesiatrade.go.id", desc: { zh: "印尼官方B2B贸易平台", en: "Indonesia's official B2B trade platform" }, tags: ["B2B", "官方"] },
                  { name: "印尼工商会KADIN", url: "https://www.kadin.id", desc: { zh: "印尼全国性官方商会组织，拥有超300万家企业会员", en: "Indonesia's national chamber with 3M+ member companies" }, tags: ["商会", "会员"] }
                ],
                b2b: [
                  { name: "Indotrading", url: "https://www.indotrading.com", desc: { zh: "印尼本土最大B2B平台，被称为\"印尼版阿里\"", en: "Indonesia's largest domestic B2B platform, dubbed 'Indonesia's Alibaba'" }, tags: ["B2B", "工业", "建材"] },
                  { name: "Ralali Business", url: "https://www.ralali.com", desc: { zh: "印尼头部B2B批发平台，入驻超10万家供应商", en: "Indonesia's top B2B wholesale platform with 100,000+ suppliers" }, tags: ["批发", "工业", "消费品"] },
                  { name: "Indonetwork", url: "https://www.indonetwork.co.id", desc: { zh: "印尼本土老牌B2B平台", en: "Indonesia's long-established domestic B2B platform" }, tags: ["B2B", "全品类"] }
                ],
                distribution: []
              }
            },
            {
              id: "philippines",
              name: { zh: "菲律宾", en: "Philippines" },
              flag: "PH",
              channels: {
                official: [
                  { name: "菲律宾贸易和工业部DTI", url: "https://www.dti.gov.ph", desc: { zh: "菲律宾政府官方贸易主管部门", en: "Philippines' official trade and industry department" }, tags: ["官方"] },
                  { name: "Philippine Trade Exchange", url: "https://www.ptradex.gov.ph", desc: { zh: "菲律宾官方B2B贸易平台", en: "Philippines' official B2B trade platform" }, tags: ["B2B", "官方"] },
                  { name: "菲律宾政府采购平台PhilGEPS", url: "https://www.philgeps.gov.ph", desc: { zh: "菲律宾政府官方招标采购门户", en: "Philippines' official government procurement portal" }, tags: ["政府采购", "招标"] }
                ],
                b2b: [
                  { name: "Philippine B2B", url: "https://www.philb2b.com", desc: { zh: "菲律宾本土头部B2B平台", en: "Philippines' leading domestic B2B platform" }, tags: ["B2B", "全品类"] },
                  { name: "Gaisano Business", url: "https://www.gaisano.com", desc: { zh: "菲律宾本土大型零售批发集团旗下B2B平台", en: "B2B platform of Philippines' major retail wholesale group" }, tags: ["批发", "零售"] }
                ],
                distribution: []
              }
            },
            {
              id: "malaysia",
              name: { zh: "马来西亚", en: "Malaysia" },
              flag: "MY",
              channels: {
                official: [
                  { name: "马来西亚投资发展局MIDA", url: "https://www.mida.gov.my", desc: { zh: "马来西亚政府官方贸易促进机构", en: "Malaysia's official investment development agency" }, tags: ["官方", "贸易促进"] },
                  { name: "马来西亚对外贸易发展局MATRADE", url: "https://www.matrade.gov.my", desc: { zh: "马来西亚官方贸易促进机构", en: "Malaysia's official trade development authority" }, tags: ["官方"] },
                  { name: "马来西亚政府采购平台", url: "https://www.negara.gov.my", desc: { zh: "马来西亚政府官方采购门户", en: "Malaysia's official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Malaysia Business Directory", url: "https://www.malaysiabusinessdirectory.com", desc: { zh: "马来西亚头部企业名录平台", en: "Malaysia's leading business directory" }, tags: ["企业名录"] },
                  { name: "MTIS", url: "https://www.mtidisentral.com", desc: { zh: "马来西亚本土B2B平台", en: "Malaysia's domestic B2B platform" }, tags: ["B2B"] }
                ],
                distribution: []
              }
            },
            {
              id: "cambodia",
              name: { zh: "柬埔寨", en: "Cambodia" },
              flag: "KH",
              channels: {
                official: [
                  { name: "柬埔寨商务部", url: "https://www.moc.gov.kh", desc: { zh: "柬埔寨政府官方贸易主管部门", en: "Cambodia's official commerce ministry" }, tags: ["官方"] },
                  { name: "柬埔寨商会CCC", url: "https://www.cambodiacchamber.org", desc: { zh: "柬埔寨全国性商会组织", en: "Cambodia's national chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "Cambodia Yellow Pages", url: "https://www.yellowpages-cambodia.com", desc: { zh: "柬埔寨企业黄页平台", en: "Cambodia's business yellow pages" }, tags: ["企业名录"] },
                  { name: "Khmer B2B", url: "https://www.khmerb2b.com", desc: { zh: "柬埔寨本土头部B2B平台", en: "Cambodia's leading domestic B2B platform" }, tags: ["B2B", "建材", "日用品"] }
                ],
                distribution: []
              }
            },
            {
              id: "myanmar",
              name: { zh: "缅甸", en: "Myanmar" },
              flag: "MM",
              channels: {
                official: [
                  { name: "缅甸商务部", url: "https://www.commerce.gov.mm", desc: { zh: "缅甸政府官方贸易主管部门", en: "Myanmar's official commerce ministry" }, tags: ["官方"] },
                  { name: "缅甸联邦工商会UMFCCI", url: "https://www.umfcci.com.mm", desc: { zh: "缅甸全国性商会组织", en: "Myanmar's national chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "Myanmar B2B", url: "https://www.myanmarb2b.com", desc: { zh: "缅甸本土头部B2B平台", en: "Myanmar's leading domestic B2B platform" }, tags: ["B2B", "农产品", "纺织"] }
                ],
                distribution: []
              }
            },
            {
              id: "laos",
              name: { zh: "老挝", en: "Laos" },
              flag: "LA",
              channels: {
                official: [
                  { name: "老挝工业和贸易部", url: "https://www.mit.gov.la", desc: { zh: "老挝政府官方贸易主管部门", en: "Laos' official industry and trade ministry" }, tags: ["官方"] },
                  { name: "老挝国家工商会LNCCI", url: "https://www.lncci.org.la", desc: { zh: "老挝全国性商会组织", en: "Laos' national chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "Lao Business Portal", url: "https://www.laobusinessportal.com", desc: { zh: "老挝本土核心B2B平台", en: "Laos' core domestic B2B platform" }, tags: ["B2B"] }
                ],
                distribution: []
              }
            },
            {
              id: "brunei",
              name: { zh: "文莱", en: "Brunei" },
              flag: "BN",
              channels: {
                official: [
                  { name: "文莱初级资源和旅游部", url: "https://www.mprt.gov.bn", desc: { zh: "文莱政府官方资源与旅游部门", en: "Brunei's official primary resources and tourism ministry" }, tags: ["官方"] },
                  { name: "文莱工商会BCCI", url: "https://www.bcci.org.bn", desc: { zh: "文莱全国性商会组织", en: "Brunei's national chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "Brunei Business Directory", url: "https://www.bruneibusinessdirectory.com", desc: { zh: "文莱核心企业名录平台", en: "Brunei's core business directory" }, tags: ["企业名录"] }
                ],
                distribution: []
              }
            }
          ]
        },
        {
          id: "south-asia",
          name: { zh: "南亚", en: "South Asia" },
          countries: [
            {
              id: "india",
              name: { zh: "印度", en: "India" },
              flag: "IN",
              channels: {
                official: [
                  { name: "印度贸易促进组织ITPO", url: "https://www.indiatradepromotion.org", desc: { zh: "印度政府直属贸易促进机构", en: "India's government trade promotion organization" }, tags: ["官方", "贸易促进"] },
                  { name: "印度政府电子采购平台GeM", url: "https://gem.gov.in", desc: { zh: "印度政府官方招标采购门户，全品类覆盖，年交易额超万亿卢比", en: "India's official government e-procurement portal covering all categories" }, tags: ["政府采购", "招标", "全品类"] },
                  { name: "印度工业联合会CII", url: "https://www.cii.in", desc: { zh: "印度顶级行业协会，拥有超9000家企业会员", en: "India's top industry association with 9,000+ member companies" }, tags: ["行业协会", "大型企业"] },
                  { name: "印度工商联合会FICCI", url: "https://www.ficci.in", desc: { zh: "印度全国性顶级商会组织，拥有超25万家企业会员", en: "India's national chamber with 250,000+ member companies" }, tags: ["商会", "全品类"] }
                ],
                b2b: [
                  { name: "IndiaMART", url: "https://www.indiamart.com", desc: { zh: "印度最大B2B平台，汇聚400万+供应商、3500万+买家", en: "India's largest B2B platform with 4M+ suppliers and 35M+ buyers" }, tags: ["B2B", "全品类", "最大"] },
                  { name: "TradeIndia", url: "https://www.tradeindia.com", desc: { zh: "印度第二大B2B平台，超560万注册用户", en: "India's second largest B2B platform with 5.6M+ registered users" }, tags: ["B2B", "工业", "农业"] },
                  { name: "Exporters India", url: "https://www.exportersindia.com", desc: { zh: "印度头部B2B平台，拥有超300万注册会员", en: "India's top B2B platform with 3M+ registered members" }, tags: ["B2B", "全品类"] },
                  { name: "Kompass India", url: "https://in.kompass.com", desc: { zh: "全球知名工业B2B平台印度分站", en: "Global industrial B2B platform's India division" }, tags: ["工业", "数据库"] }
                ],
                distribution: [
                  { name: "Agency Network India", url: "https://www.agency-network.in", desc: { zh: "印度本土专业的代理、分销、加盟合作平台", en: "India's professional platform for agent, distribution, and franchise partnerships" }, tags: ["代理", "分销", "加盟"] },
                  { name: "Business Match India", url: "https://www.businessmatchindia.com", desc: { zh: "印度头部商务匹配平台，专注中印企业供需对接", en: "India's top business matching platform for India-China trade connections" }, tags: ["商务匹配", "中印"] }
                ]
              }
            },
            {
              id: "pakistan",
              name: { zh: "巴基斯坦", en: "Pakistan" },
              flag: "PK",
              channels: {
                official: [
                  { name: "巴基斯坦贸易发展局TDAP", url: "https://www.tdap.gov.pk", desc: { zh: "巴基斯坦政府直属贸易促进机构", en: "Pakistan's government trade development agency" }, tags: ["官方", "贸易促进"] },
                  { name: "巴基斯坦政府采购平台PPRA", url: "https://www.ppra.org.pk", desc: { zh: "巴基斯坦政府公共采购监管局官方招标门户", en: "Pakistan's official public procurement regulatory authority" }, tags: ["政府采购", "招标"] },
                  { name: "巴基斯坦工商联合会FPCCI", url: "https://www.fpcci.com.pk", desc: { zh: "巴基斯坦全国性官方商会组织", en: "Pakistan's national chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "TradeKey", url: "https://www.tradekey.com", desc: { zh: "总部位于沙特的全球知名B2B平台，巴基斯坦用户群体庞大", en: "Saudi-headquartered global B2B platform with large Pakistani user base" }, tags: ["B2B", "全球", "纺织", "机械"] },
                  { name: "PakBiz", url: "https://www.pakbiz.com", desc: { zh: "巴基斯坦本土头部B2B平台", en: "Pakistan's leading domestic B2B platform" }, tags: ["B2B", "全行业"] }
                ],
                distribution: []
              }
            },
            {
              id: "bangladesh",
              name: { zh: "孟加拉国", en: "Bangladesh" },
              flag: "BD",
              channels: {
                official: [
                  { name: "孟加拉国出口促进局EPB", url: "https://www.epb.gov.bd", desc: { zh: "孟加拉国政府直属贸易促进机构", en: "Bangladesh's export promotion bureau" }, tags: ["官方"] },
                  { name: "Bdtdc", url: "https://www.bdtdc.com", desc: { zh: "孟加拉国官方B2B平台", en: "Bangladesh's official B2B platform" }, tags: ["B2B", "官方"] },
                  { name: "孟加拉国工商联合会FBCCI", url: "https://www.fbcci.org.bd", desc: { zh: "孟加拉国全国性商会组织", en: "Bangladesh's national chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "TradeBangla", url: "https://www.tradebangla.com", desc: { zh: "孟加拉国本土头部B2B平台", en: "Bangladesh's leading domestic B2B platform" }, tags: ["B2B", "纺织", "建材"] }
                ],
                distribution: []
              }
            },
            {
              id: "sri-lanka",
              name: { zh: "斯里兰卡", en: "Sri Lanka" },
              flag: "LK",
              channels: {
                official: [
                  { name: "斯里兰卡出口发展局EDB", url: "https://www.srilankabusiness.com", desc: { zh: "斯里兰卡政府官方出口促进机构", en: "Sri Lanka's export development board" }, tags: ["官方", "出口"] },
                  { name: "斯里兰卡工商会CCI", url: "https://www.chamber.lk", desc: { zh: "斯里兰卡全国性商会组织", en: "Sri Lanka's chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "Sri Lanka B2B", url: "https://www.srilankab2b.com", desc: { zh: "斯里兰卡本土B2B平台", en: "Sri Lanka's domestic B2B platform" }, tags: ["B2B", "茶叶", "纺织"] }
                ],
                distribution: []
              }
            }
          ]
        },
        {
          id: "west-asia",
          name: { zh: "西亚", en: "West & Central Asia" },
          countries: [
            {
              id: "uae",
              name: { zh: "阿联酋", en: "UAE" },
              flag: "AE",
              channels: {
                official: [
                  { name: "迪拜经济发展局DED", url: "https://www.ded.gov.ae", desc: { zh: "迪拜政府官方经济与贸易主管部门", en: "Dubai's government economic and trade authority" }, tags: ["官方", "迪拜", "中东"] },
                  { name: "Dubai Trade", url: "https://www.dubaitrade.ae", desc: { zh: "迪拜官方B2B平台，官方背书", en: "Dubai's official B2B platform with government backing" }, tags: ["B2B", "官方", "中东"] },
                  { name: "阿联酋工商会联合会FCCI", url: "https://www.federationchambers.ae", desc: { zh: "阿联酋全国性商会组织，覆盖7个酋长国", en: "UAE's national federation of chambers covering all 7 emirates" }, tags: ["商会", "全品类"] },
                  { name: "阿联酋政府采购平台MOF", url: "https://eprocurement.mof.gov.ae", desc: { zh: "阿联酋财政部官方招标采购门户", en: "UAE Ministry of Finance's official procurement portal" }, tags: ["政府采购", "招标"] }
                ],
                b2b: [
                  { name: "Tradeling", url: "https://www.tradeling.com", desc: { zh: "迪拜政府100%投资打造的中东最大B2B电商平台之一", en: "Dubai government-backed leading B2B e-commerce platform in the Middle East" }, tags: ["B2B", "中东", "跨境"] },
                  { name: "Tejari", url: "https://www.tejari.com", desc: { zh: "阿联酋本土头部B2B平台，覆盖中东15国18万+企业", en: "UAE's leading B2B platform covering 180,000+ companies across 15 ME countries" }, tags: ["B2B", "中东", "政府"] },
                  { name: "Abraa", url: "https://www.abraa.com", desc: { zh: "总部位于迪拜的大型B2B平台", en: "Dubai-headquartered large B2B platform" }, tags: ["B2B", "迪拜", "全品类"] },
                  { name: "Yello.ae", url: "https://www.yello.ae", desc: { zh: "阿联酋热门企业名录平台，涵盖超32万家公司", en: "Popular UAE business directory covering 320,000+ companies" }, tags: ["企业名录", "批发商"] }
                ],
                distribution: []
              }
            },
            {
              id: "saudi-arabia",
              name: { zh: "沙特阿拉伯", en: "Saudi Arabia" },
              flag: "SA",
              channels: {
                official: [
                  { name: "沙特商务部", url: "https://mc.gov.sa", desc: { zh: "沙特政府官方贸易主管部门", en: "Saudi Arabia's official commerce ministry" }, tags: ["官方", "贸易"] },
                  { name: "沙特出口发展局SEDA", url: "https://www.seda.gov.sa", desc: { zh: "沙特官方贸易促进机构", en: "Saudi Arabia's official export development authority" }, tags: ["官方", "出口"] },
                  { name: "沙特政府采购平台Etimad", url: "https://www.etimad.gov.sa", desc: { zh: "沙特财政部官方招标采购门户", en: "Saudi Arabia's official government procurement portal by Ministry of Finance" }, tags: ["政府采购", "招标"] },
                  { name: "沙特工商会SCCI", url: "https://www.saudi-chamber.sa", desc: { zh: "沙特全国性官方商会组织", en: "Saudi Arabia's national chamber of commerce" }, tags: ["商会", "全品类"] }
                ],
                b2b: [
                  { name: "Sary", url: "https://www.sary.com", desc: { zh: "沙特领先B2B电商平台，被称为\"沙特版1688\"", en: "Leading Saudi B2B e-commerce platform, dubbed 'Saudi 1688'" }, tags: ["B2B", "沙特", "消费品"] },
                  { name: "TradeKey", url: "https://www.tradekey.com", desc: { zh: "总部位于沙特，全球知名B2B平台", en: "Saudi-headquartered globally renowned B2B platform" }, tags: ["B2B", "全球", "全品类"] },
                  { name: "Saudi Yellow Pages Online", url: "https://www.saudiyellowpagesonline.com", desc: { zh: "沙特知名B2B平台与企业名录，超百万注册企业", en: "Well-known Saudi B2B platform and directory with 1M+ registered businesses" }, tags: ["企业名录", "全品类"] }
                ],
                distribution: []
              }
            },
            {
              id: "turkey",
              name: { zh: "土耳其", en: "Turkey" },
              flag: "TR",
              channels: {
                official: [
                  { name: "土耳其贸易部", url: "https://www.ticaret.gov.tr", desc: { zh: "土耳其政府官方贸易主管部门", en: "Turkey's official trade ministry" }, tags: ["官方", "贸易"] },
                  { name: "土耳其政府采购平台EKAP", url: "https://ekap.kik.gov.tr", desc: { zh: "土耳其政府官方招标采购门户", en: "Turkey's official government e-procurement portal" }, tags: ["政府采购", "招标"] },
                  { name: "土耳其工商和贸易协会联合会TCCI", url: "https://www.tobb.org.tr", desc: { zh: "土耳其全国性商会组织，拥有超300万家企业会员", en: "Turkey's national chamber with 3M+ member companies" }, tags: ["商会", "全品类"] }
                ],
                b2b: [
                  { name: "TurkPages", url: "https://www.turkpages.com", desc: { zh: "土耳其本土头部B2B平台", en: "Turkey's leading domestic B2B platform" }, tags: ["B2B", "机械", "纺织"] },
                  { name: "Turkey B2B", url: "https://www.turkeyb2b.com", desc: { zh: "土耳其本土核心B2B平台，专注中土贸易对接", en: "Turkey's core B2B platform specializing in China-Turkey trade" }, tags: ["B2B", "中土"] }
                ],
                distribution: []
              }
            },
            {
              id: "qatar",
              name: { zh: "卡塔尔", en: "Qatar" },
              flag: "QA",
              channels: {
                official: [
                  { name: "卡塔尔商业和工业部", url: "https://www.moci.gov.qa", desc: { zh: "卡塔尔政府官方贸易主管部门", en: "Qatar's official commerce ministry" }, tags: ["官方"] },
                  { name: "卡塔尔政府采购平台", url: "https://www.tenders.gov.qa", desc: { zh: "卡塔尔政府招标采购门户", en: "Qatar's official government tender portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Qatar Yellow Pages", url: "https://www.yellowpages.qa", desc: { zh: "卡塔尔官方黄页", en: "Qatar's official business yellow pages" }, tags: ["企业名录"] },
                  { name: "Qatar B2B", url: "https://www.qatarb2b.com", desc: { zh: "卡塔尔本土B2B平台", en: "Qatar's domestic B2B platform" }, tags: ["B2B"] }
                ],
                distribution: []
              }
            },
            {
              id: "kuwait",
              name: { zh: "科威特", en: "Kuwait" },
              flag: "KW",
              channels: {
                official: [
                  { name: "科威特商业和工业部", url: "https://www.moci.gov.kw", desc: { zh: "科威特政府官方贸易主管部门", en: "Kuwait's official commerce ministry" }, tags: ["官方"] },
                  { name: "科威特工商会KCCI", url: "https://www.kwchamber.com", desc: { zh: "科威特全国性商会组织", en: "Kuwait's national chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "Kuwait Yellow Pages", url: "https://www.kuwaityellowpages.com", desc: { zh: "科威特企业黄页", en: "Kuwait's business yellow pages" }, tags: ["企业名录"] }
                ],
                distribution: []
              }
            },
            {
              id: "oman",
              name: { zh: "阿曼", en: "Oman" },
              flag: "OM",
              channels: {
                official: [
                  { name: "阿曼商业、工业和投资促进部", url: "https://www.ocipa.gov.om", desc: { zh: "阿曼政府官方贸易主管部门", en: "Oman's official commerce and investment promotion ministry" }, tags: ["官方"] },
                  { name: "阿曼工商会OCCI", url: "https://www.omanchamber.gov.om", desc: { zh: "阿曼全国性商会组织", en: "Oman's national chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "Bawwaba", url: "https://www.bawwaba.com", desc: { zh: "阿曼本土头部B2B电子市场", en: "Oman's leading domestic B2B e-marketplace" }, tags: ["B2B"] }
                ],
                distribution: []
              }
            },
            {
              id: "bahrain",
              name: { zh: "巴林", en: "Bahrain" },
              flag: "BH",
              channels: {
                official: [
                  { name: "巴林商业和工业部", url: "https://www.moic.gov.bh", desc: { zh: "巴林政府官方贸易主管部门", en: "Bahrain's official commerce ministry" }, tags: ["官方"] },
                  { name: "巴林工商会BCCI", url: "https://www.bahrainchamber.bh", desc: { zh: "巴林全国性商会组织", en: "Bahrain's national chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "Bahrain Yellow Pages", url: "https://www.bahrainyellowpages.com.bh", desc: { zh: "巴林企业黄页", en: "Bahrain's business yellow pages" }, tags: ["企业名录"] }
                ],
                distribution: []
              }
            },
            {
              id: "iran",
              name: { zh: "伊朗", en: "Iran" },
              flag: "IR",
              channels: {
                official: [
                  { name: "伊朗工矿贸易部", url: "https://www.mimt.gov.ir", desc: { zh: "伊朗政府官方贸易主管部门", en: "Iran's official ministry of industry" }, tags: ["官方"] },
                  { name: "伊朗工商会ICCIMA", url: "https://www.iranianchamber.com", desc: { zh: "伊朗全国性商会组织", en: "Iran's national chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "Iran B2B", url: "https://www.iranb2b.com", desc: { zh: "伊朗专业B2B进出口平台", en: "Professional Iranian B2B import/export platform" }, tags: ["B2B", "化工", "食品"] }
                ],
                distribution: []
              }
            },
            {
              id: "israel",
              name: { zh: "以色列", en: "Israel" },
              flag: "IL",
              channels: {
                official: [
                  { name: "以色列经济和工业部", url: "https://www.economy.gov.il", desc: { zh: "以色列政府官方贸易主管部门", en: "Israel's official economy ministry" }, tags: ["官方"] },
                  { name: "以色列商会联合会FICC", url: "https://www.ficc.org.il", desc: { zh: "以色列全国性商会组织", en: "Israel's national chamber federation" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "Israel Business Portal", url: "https://www.business.gov.il", desc: { zh: "以色列官方企业门户", en: "Israel's official business portal" }, tags: ["官方", "企业名录"] },
                  { name: "Israel B2B", url: "https://www.israelb2b.com", desc: { zh: "以色列本土头部B2B平台", en: "Israel's leading domestic B2B platform" }, tags: ["B2B", "高科技", "农业"] }
                ],
                distribution: []
              }
            },
            {
              id: "kazakhstan",
              name: { zh: "哈萨克斯坦", en: "Kazakhstan" },
              flag: "KZ",
              channels: {
                official: [
                  { name: "哈萨克斯坦贸易和一体化部", url: "https://www.mti.gov.kz", desc: { zh: "哈萨克斯坦政府官方贸易主管部门", en: "Kazakhstan's official trade ministry" }, tags: ["官方"] },
                  { name: "哈萨克斯坦国家工商会NCCI", url: "https://www.chamber.kz", desc: { zh: "哈萨克斯坦全国性商会组织", en: "Kazakhstan's national chamber of commerce" }, tags: ["商会"] },
                  { name: "哈萨克斯坦政府采购平台", url: "https://www.goszakup.gov.kz", desc: { zh: "哈萨克斯坦政府官方招标采购门户", en: "Kazakhstan's official government procurement portal" }, tags: ["政府采购", "招标"] }
                ],
                b2b: [
                  { name: "Kazakhstan B2B", url: "https://www.kazakhstanb2b.com", desc: { zh: "哈萨克斯坦本土头部B2B平台", en: "Kazakhstan's leading domestic B2B platform" }, tags: ["B2B", "石油", "矿产"] }
                ],
                distribution: []
              }
            },
            {
              id: "uzbekistan",
              name: { zh: "乌兹别克斯坦", en: "Uzbekistan" },
              flag: "UZ",
              channels: {
                official: [
                  { name: "乌兹别克斯坦投资和外贸部", url: "https://www.mft.uz", desc: { zh: "乌兹别克斯坦政府官方贸易主管部门", en: "Uzbekistan's official investment and foreign trade ministry" }, tags: ["官方"] },
                  { name: "乌兹别克斯坦工商会CCIU", url: "https://www.chamber.uz", desc: { zh: "乌兹别克斯坦全国性商会组织", en: "Uzbekistan's national chamber" }, tags: ["商会"] },
                  { name: "乌兹别克斯坦政府采购平台", url: "https://www.uzex.uz", desc: { zh: "乌兹别克斯坦政府招标采购门户", en: "Uzbekistan's official procurement exchange" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Uzbekistan B2B", url: "https://www.uzbekistanb2b.com", desc: { zh: "乌兹别克斯坦本土核心B2B平台", en: "Uzbekistan's core domestic B2B platform" }, tags: ["B2B", "纺织", "农业"] }
                ],
                distribution: []
              }
            }
          ]
        }
      ],
      crossborder: [
        { name: "阿里巴巴国际站Alibaba.com", url: "https://www.alibaba.com", desc: { zh: "全球领先的B2B跨境电商平台，亚洲各国采购商渗透率最高", en: "World's leading cross-border B2B e-commerce platform with highest penetration in Asia" }, tags: ["跨境", "B2B", "全品类", "全球"] },
        { name: "中国制造网Made-in-China.com", url: "https://www.made-in-china.com", desc: { zh: "聚焦中国制造企业出海，工业设备、电子产品领域优势突出", en: "Focus on Chinese manufacturers going global, strong in industrial equipment and electronics" }, tags: ["跨境", "中国制造", "工业"] },
        { name: "环球资源Global Sources", url: "https://www.globalsources.com", desc: { zh: "亚洲老牌顶级B2B平台，深耕电子、家居、礼品、时尚品类", en: "Long-established Asian B2B platform for electronics, home, gifts, and fashion" }, tags: ["跨境", "B2B", "展会"] },
        { name: "DHgate敦煌网", url: "https://www.dhgate.com", desc: { zh: "中国领先的跨境B2B平台，主打小额批发、一件代发", en: "Leading Chinese cross-border B2B platform for small wholesale and dropshipping" }, tags: ["跨境", "小额批发", "一件代发"] }
      ]
    },
    {
      id: "europe",
      name: { zh: "欧洲", en: "Europe" },
      nameSort: "E",
      regions: [
        {
          id: "pan-europe",
          name: { zh: "全欧洲", en: "Pan-European" },
          countries: [],
          panregional: {
            official: [
              { name: "TED (Tenders Electronic Daily)", url: "https://ted.europa.eu", desc: { zh: "欧盟官方公共采购门户，全欧公共采购的唯一官方发布平台，日均发布超3000条采购招标", en: "EU's official public procurement portal — the only official source for all European public tenders" }, tags: ["欧盟", "政府采购", "招标", "全品类"] },
              { name: "Enterprise Europe Network (EEN)", url: "https://een.ec.europa.eu", desc: { zh: "欧盟官方企业对接网络，全球最大中小企业支持网络之一，覆盖60+国家", en: "EU's official business matching network — one of the world's largest SME support networks" }, tags: ["欧盟", "企业对接", "中小企业"] },
              { name: "Eurochambres", url: "https://www.eurochambres.eu", desc: { zh: "欧洲工商会联合会，覆盖45个国家2000+地方商会4500万+企业会员", en: "European Chambers of Commerce Federation with 45 countries, 2,000+ local chambers, 45M+ companies" }, tags: ["商会", "全欧", "企业对接"] },
              { name: "欧盟贸易委员会官网", url: "https://policy.trade.ec.europa.eu", desc: { zh: "欧盟贸易政策官方发布平台", en: "EU Trade Commission's official policy portal" }, tags: ["欧盟", "贸易政策"] }
            ],
            b2b: [
              { name: "Europages（欧洲黄页）", url: "https://www.europages.com", desc: { zh: "欧洲最大的B2B企业名录与采购平台，覆盖33+欧洲国家260万+企业，支持25种语言", en: "Europe's largest B2B business directory covering 33+ countries, 2.6M+ companies, in 25 languages" }, tags: ["欧洲", "企业名录", "全品类", "多语言"] },
              { name: "Kompass Europe", url: "https://www.kompass.com", desc: { zh: "1947年成立于瑞士，欧洲最权威B2B企业数据库，覆盖60+国家5700万+企业", en: "Europe's most authoritative B2B database since 1947, covering 60+ countries and 57M+ companies" }, tags: ["欧洲", "数据库", "工业"] },
              { name: "DirectIndustry", url: "https://www.directindustry.com", desc: { zh: "欧洲顶级工业垂直B2B平台，被称为\"工业版阿里巴巴\"", en: "Europe's top industrial B2B platform, dubbed the 'Industrial Alibaba'" }, tags: ["欧洲", "工业", "机械", "垂直"] },
              { name: "Archiexpo", url: "https://www.archiexpo.com", desc: { zh: "建筑家居领域欧洲最权威B2B平台", en: "Europe's most authoritative B2B platform for architecture and home" }, tags: ["欧洲", "建筑", "家居"] }
            ],
            distribution: [
              { name: "European Distribution Network", url: "https://www.europeandistributionnetwork.com", desc: { zh: "欧洲最大分销代理匹配平台，覆盖全行业", en: "Europe's largest distribution network matching platform" }, tags: ["欧洲", "分销", "代理"] },
              { name: "Distributors Europe", url: "https://www.distributorseurope.com", desc: { zh: "专业欧洲分销商对接平台，超10万家欧洲本土分销商数据库", en: "Professional European distributor matching platform with 100,000+ distributor database" }, tags: ["欧洲", "分销商"] },
              { name: "European Agency Network", url: "https://www.europeanagencynetwork.com", desc: { zh: "欧洲本土专业代理合作匹配平台", en: "European professional agency partnership matching platform" }, tags: ["欧洲", "代理"] }
            ]
          }
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
                  { name: "Germany Trade & Invest (GTAI)", url: "https://www.gtai.de", desc: { zh: "德国联邦政府直属贸易投资促进机构，中企进入德国市场的官方核心入口", en: "German federal trade and investment agency — the official entry point for Chinese companies entering Germany" }, tags: ["官方", "贸易促进", "中德"] },
                  { name: "德国工商大会DIHK", url: "https://www.dihk.de", desc: { zh: "德国全国性商会组织，覆盖全德80个地方工商会，350万+企业会员", en: "German national chamber with 80 local chambers and 3.5M+ company members" }, tags: ["商会", "全品类"] },
                  { name: "德国联邦政府采购平台evergabe", url: "https://www.evergabe.de", desc: { zh: "德国政府官方招标采购门户", en: "Germany's official government procurement portal" }, tags: ["政府采购", "招标"] }
                ],
                b2b: [
                  { name: "Wer liefert Was (WLW)", url: "https://www.wlw.de", desc: { zh: "德语区最大的B2B平台，德国版\"1688+黄页\"，65万+企业入驻", en: "German-speaking region's largest B2B platform, dubbed 'German 1688+Yellow Pages'" }, tags: ["B2B", "德语区", "工业", "消费品"] },
                  { name: "IndustryStock", url: "https://www.industrystock.com", desc: { zh: "德国专业工业B2B平台，欧洲工业4.0核心平台，17种语言", en: "Professional German industrial B2B platform, Europe's Industry 4.0 hub with 17 languages" }, tags: ["工业", "机械", "多语言"] },
                  { name: "Mercateo", url: "https://www.mercateo.com", desc: { zh: "德国头部B2B批发采购平台，入驻超100万企业买家", en: "Germany's top B2B wholesale procurement platform with 1M+ business buyers" }, tags: ["B2B", "批发", "MRO"] }
                ],
                distribution: [
                  { name: "Agentur Navigator", url: "https://www.agentur-navigator.de", desc: { zh: "德国最大的代理招募专属平台", en: "Germany's largest platform dedicated to agent recruitment" }, tags: ["代理", "分销", "加盟"] },
                  { name: "Business Matching Deutschland", url: "https://www.business-matching.de", desc: { zh: "德国专业商务匹配平台，专注中德企业对接", en: "Professional German business matching platform for China-Germany connections" }, tags: ["商务匹配", "中德"] }
                ]
              }
            },
            {
              id: "france",
              name: { zh: "法国", en: "France" },
              flag: "FR",
              channels: {
                official: [
                  { name: "Business France", url: "https://www.businessfrance.fr", desc: { zh: "法国政府直属贸易促进机构", en: "French government trade promotion agency" }, tags: ["官方", "贸易促进"] },
                  { name: "法国工商会CCI France", url: "https://www.ccifrance.fr", desc: { zh: "法国全国性商会组织，覆盖120+地方工商会", en: "French national chamber with 120+ local chambers" }, tags: ["商会"] },
                  { name: "法国政府采购平台", url: "https://www.marches-publics.gouv.fr", desc: { zh: "法国政府官方招标采购门户", en: "France's official government procurement portal" }, tags: ["政府采购", "招标"] }
                ],
                b2b: [
                  { name: "PagesJaunes（法国黄页）", url: "https://www.pagesjaunes.fr", desc: { zh: "法国最大的商业目录平台", en: "France's largest commercial directory platform" }, tags: ["企业名录", "全品类"] },
                  { name: "Kompass France", url: "https://www.kompass.fr", desc: { zh: "康帕斯法国分站，法国本土最权威B2B企业数据库", en: "Kompass France — France's most authoritative B2B database" }, tags: ["B2B", "数据库"] }
                ],
                distribution: [
                  { name: "Réseau Distribution France", url: "https://www.reseau-distribution-france.fr", desc: { zh: "法国本土最大的分销代理匹配平台", en: "France's largest distribution and agency matching platform" }, tags: ["分销", "代理", "法国"] }
                ]
              }
            },
            {
              id: "uk",
              name: { zh: "英国", en: "United Kingdom" },
              flag: "GB",
              channels: {
                official: [
                  { name: "Department for Business and Trade (DBT)", url: "https://www.great.gov.uk", desc: { zh: "英国政府商业贸易部官方平台，拥有35万+英国企业数据库", en: "UK government trade platform with 350,000+ UK company database" }, tags: ["官方", "贸易促进", "英国"] },
                  { name: "英国工商会BCC", url: "https://www.britishchambers.org.uk", desc: { zh: "英国全国性商会组织，覆盖53个地方商会7万+企业会员", en: "UK's national chamber with 53 local chambers and 70,000+ members" }, tags: ["商会"] },
                  { name: "英国政府采购平台Contracts Finder", url: "https://www.contractsfinder.service.gov.uk", desc: { zh: "英国政府官方招标采购门户", en: "UK government's official procurement portal" }, tags: ["政府采购", "招标"] }
                ],
                b2b: [
                  { name: "Applegate", url: "https://www.applegate.co.uk", desc: { zh: "英国最大的工业B2B平台", en: "UK's largest industrial B2B platform" }, tags: ["B2B", "工业", "MRO"] },
                  { name: "Yell", url: "https://www.yell.com", desc: { zh: "英国老牌企业黄页", en: "UK's long-established business yellow pages" }, tags: ["企业名录", "全品类"] }
                ],
                distribution: [
                  { name: "UK Distribution Network", url: "https://www.ukdistributionnetwork.co.uk", desc: { zh: "英国最大的分销代理匹配平台", en: "UK's largest distribution and agency matching platform" }, tags: ["分销", "代理", "英国"] }
                ]
              }
            },
            {
              id: "netherlands",
              name: { zh: "荷兰", en: "Netherlands" },
              flag: "NL",
              channels: {
                official: [
                  { name: "荷兰企业发展局RVO", url: "https://www.rvo.nl", desc: { zh: "荷兰政府贸易投资促进机构", en: "Dutch government trade and investment agency" }, tags: ["官方"] },
                  { name: "荷兰政府采购平台TenderNed", url: "https://www.tenderned.nl", desc: { zh: "荷兰政府官方招标采购门户", en: "Netherlands' official government tender portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Telefoonboek.nl", url: "https://www.telefoonboek.nl", desc: { zh: "荷兰最大企业黄页", en: "Netherlands' largest business yellow pages" }, tags: ["企业名录"] },
                  { name: "Dutch Business Directory", url: "https://www.dutchbusinessdirectory.nl", desc: { zh: "荷兰本土权威B2B平台", en: "Netherlands' authoritative domestic B2B platform" }, tags: ["B2B"] }
                ],
                distribution: [
                  { name: "Dutch Distribution Network", url: "https://www.dutchdistributionnetwork.nl", desc: { zh: "荷兰分销代理匹配核心平台", en: "Netherlands' core distribution matching platform" }, tags: ["分销", "荷兰"] }
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
                  { name: "比利时政府采购平台", url: "https://www.tenders.be", desc: { zh: "比利时政府官方招标门户", en: "Belgium's official government tender portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Belgian Business Directory", url: "https://www.belgianbusinessdirectory.be", desc: { zh: "比利时本土权威B2B平台", en: "Belgium's authoritative domestic B2B platform" }, tags: ["B2B", "企业名录"] }
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
                  { name: "瑞士出口促进局S-GE", url: "https://www.s-ge.com", desc: { zh: "瑞士政府官方贸易投资促进机构", en: "Switzerland's official trade and investment agency" }, tags: ["官方"] },
                  { name: "瑞士政府采购平台SIMAP", url: "https://www.simap.ch", desc: { zh: "瑞士政府官方招标采购门户", en: "Switzerland's official procurement information system" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "WLW Schweiz", url: "https://www.wlw.ch", desc: { zh: "德语区头部B2B平台瑞士分站", en: "German-speaking B2B platform's Swiss division" }, tags: ["B2B", "德语区", "工业"] },
                  { name: "Swiss Business Directory", url: "https://www.swissbusinessdirectory.ch", desc: { zh: "瑞士本土B2B平台", en: "Switzerland's domestic B2B platform" }, tags: ["B2B"] }
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
                  { name: "奥地利外贸局AUSTRIAN TRADE", url: "https://www.wko.at", desc: { zh: "奥地利政府贸易促进机构", en: "Austrian government trade agency" }, tags: ["官方"] },
                  { name: "奥地利政府采购平台", url: "https://www.gmbh.gv.at", desc: { zh: "奥地利政府官方采购门户", en: "Austria's official company information portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "WLW Österreich", url: "https://www.wlw.at", desc: { zh: "德语区B2B平台奥地利分站", en: "German-speaking B2B platform's Austrian division" }, tags: ["B2B", "德语区"] }
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
                  { name: "意大利对外贸易委员会ICE", url: "https://www.ice.it", desc: { zh: "意大利政府直属贸易促进机构", en: "Italian trade promotion agency" }, tags: ["官方", "贸易促进"] },
                  { name: "意大利政府采购平台MEPA", url: "https://www.acquistinretepa.it", desc: { zh: "意大利政府官方招标采购门户", en: "Italy's official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Pagine Gialle（意大利黄页）", url: "https://www.paginegialle.it", desc: { zh: "意大利权威企业黄页与B2B平台", en: "Italy's authoritative business yellow pages and B2B platform" }, tags: ["企业名录", "全品类"] }
                ],
                distribution: [
                  { name: "Distribuzione Italia", url: "https://www.distribuzione-italia.it", desc: { zh: "意大利本土最大分销代理匹配平台", en: "Italy's largest distribution and agency matching platform" }, tags: ["分销", "代理", "意大利"] }
                ]
              }
            },
            {
              id: "spain",
              name: { zh: "西班牙", en: "Spain" },
              flag: "ES",
              channels: {
                official: [
                  { name: "西班牙贸易投资促进局ICEX", url: "https://www.icex.es", desc: { zh: "西班牙政府直属贸易投资促进机构", en: "Spanish trade and investment promotion agency" }, tags: ["官方"] },
                  { name: "西班牙政府采购平台PLACSP", url: "https://www.contractacion.es", desc: { zh: "西班牙政府官方招标采购门户", en: "Spain's official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Guía de Empresas", url: "https://www.guiadempresas.es", desc: { zh: "西班牙最大企业名录与B2B平台", en: "Spain's largest business directory and B2B platform" }, tags: ["企业名录", "B2B"] }
                ],
                distribution: [
                  { name: "Distribución España", url: "https://www.distribucion-espana.es", desc: { zh: "西班牙本土专业分销代理匹配平台", en: "Spain's professional distribution and agency matching platform" }, tags: ["分销", "代理", "西班牙"] }
                ]
              }
            },
            {
              id: "portugal",
              name: { zh: "葡萄牙", en: "Portugal" },
              flag: "PT",
              channels: {
                official: [
                  { name: "葡萄牙全球贸易投资局AICEP", url: "https://www.aicep.gov.pt", desc: { zh: "葡萄牙政府贸易投资促进机构", en: "Portuguese trade and investment agency" }, tags: ["官方"] },
                  { name: "葡萄牙政府采购平台", url: "https://www.base.gov.pt", desc: { zh: "葡萄牙政府官方招标采购门户", en: "Portugal's official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Portugal Business Directory", url: "https://www.portugalbusinessdirectory.pt", desc: { zh: "葡萄牙本土B2B平台", en: "Portugal's domestic B2B platform" }, tags: ["B2B", "企业名录"] }
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
                  { name: "希腊企业局Enterprise Greece", url: "https://www.enterprisegreece.gov.gr", desc: { zh: "希腊政府官方企业促进机构", en: "Greece's official enterprise promotion agency" }, tags: ["官方"] },
                  { name: "希腊政府采购平台", url: "https://www.publicprocurement.gr", desc: { zh: "希腊政府官方招标采购门户", en: "Greece's official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Greece Business Directory", url: "https://www.greecebusinessdirectory.gr", desc: { zh: "希腊本土B2B平台", en: "Greece's domestic B2B platform" }, tags: ["B2B"] }
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
                  { name: "波兰投资贸易局PAIH", url: "https://www.paih.gov.pl", desc: { zh: "波兰政府官方贸易投资促进机构", en: "Poland's official investment and trade agency" }, tags: ["官方"] },
                  { name: "波兰政府采购平台", url: "https://www.uzp.gov.pl", desc: { zh: "波兰政府官方招标采购门户", en: "Poland's official government procurement portal" }, tags: ["政府采购"] }
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
                  { name: "捷克投资贸易局SARIO", url: "https://www.sario.cz", desc: { zh: "捷克政府官方贸易投资促进机构", en: "Czech government's trade and investment agency" }, tags: ["官方"] },
                  { name: "捷克政府采购平台", url: "https://www.vestnikverejnychzakazek.cz", desc: { zh: "捷克政府官方招标门户", en: "Czech official public procurement portal" }, tags: ["政府采购"] }
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
                  { name: "匈牙利投资贸易局HIPA", url: "https://www.hipa.hu", desc: { zh: "匈牙利政府官方贸易投资促进机构", en: "Hungary's official investment and trade agency" }, tags: ["官方"] },
                  { name: "匈牙利政府采购平台", url: "https://www.kozbeszerzes.hu", desc: { zh: "匈牙利政府官方招标采购门户", en: "Hungary's official government procurement portal" }, tags: ["政府采购"] }
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
                  { name: "罗马尼亚贸易投资促进局CRPCIS", url: "https://www.investromania.gov.ro", desc: { zh: "罗马尼亚政府官方贸易投资促进机构", en: "Romania's official trade and investment agency" }, tags: ["官方"] },
                  { name: "罗马尼亚政府采购平台", url: "https://www.e-licitatie.ro", desc: { zh: "罗马尼亚政府官方招标采购门户", en: "Romania's official e-procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Romania B2B", url: "https://www.romaniab2b.com", desc: { zh: "罗马尼亚本土B2B平台", en: "Romania's domestic B2B platform" }, tags: ["B2B"] }
                ],
                distribution: []
              }
            },
            {
              id: "bulgaria",
              name: { zh: "保加利亚", en: "Bulgaria" },
              flag: "BG",
              channels: {
                official: [
                  { name: "保加利亚投资促进局BAIP", url: "https://www.investbulgaria.com", desc: { zh: "保加利亚政府官方投资促进机构", en: "Bulgaria's official investment promotion agency" }, tags: ["官方"] },
                  { name: "保加利亚政府采购平台", url: "https://www.aop.bg", desc: { zh: "保加利亚政府官方招标门户", en: "Bulgaria's official public procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Bulgaria B2B", url: "https://www.bulgariab2b.com", desc: { zh: "保加利亚本土B2B平台", en: "Bulgaria's domestic B2B platform" }, tags: ["B2B"] }
                ],
                distribution: []
              }
            },
            {
              id: "baltic",
              name: { zh: "波罗的海三国", en: "Baltic States" },
              flag: "LT",
              channels: {
                official: [
                  { name: "立陶宛企业局Versli Lietuva", url: "https://www.verslilietuva.lt", desc: { zh: "立陶宛政府官方企业促进机构", en: "Lithuania's official enterprise agency" }, tags: ["官方"] },
                  { name: "拉脱维亚投资发展署LIAA", url: "https://www.liaa.gov.lv", desc: { zh: "拉脱维亚政府官方投资发展机构", en: "Latvia's official investment development agency" }, tags: ["官方"] },
                  { name: "爱沙尼亚企业局EAS", url: "https://www.eas.ee", desc: { zh: "爱沙尼亚政府官方企业促进机构", en: "Estonia's official enterprise agency" }, tags: ["官方"] }
                ],
                b2b: [
                  { name: "Europages Baltic", url: "https://www.europages.lt", desc: { zh: "Europages波罗的海分站", en: "Europages' Baltic division" }, tags: ["B2B", "企业名录", "全品类"] }
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
                  { name: "瑞典贸易投资委员会Business Sweden", url: "https://www.business-sweden.se", desc: { zh: "瑞典政府官方贸易投资促进机构", en: "Sweden's official trade and investment agency" }, tags: ["官方"] },
                  { name: "瑞典政府采购平台", url: "https://www.oppnadata.se", desc: { zh: "瑞典政府官方数据门户", en: "Sweden's official open data portal" }, tags: ["政府采购"] }
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
                  { name: "丹麦贸易投资局Trade Council", url: "https://www.tradecouncil.dk", desc: { zh: "丹麦政府官方贸易投资促进机构", en: "Denmark's official trade and investment agency" }, tags: ["官方"] },
                  { name: "丹麦政府采购平台", url: "https://www.udbud.dk", desc: { zh: "丹麦政府官方招标门户", en: "Denmark's official tender portal" }, tags: ["政府采购"] }
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
                  { name: "芬兰企业局Business Finland", url: "https://www.businessfinland.fi", desc: { zh: "芬兰政府官方企业促进机构", en: "Finland's official enterprise agency" }, tags: ["官方"] },
                  { name: "芬兰政府采购平台", url: "https://www.hankintailmoitukset.fi", desc: { zh: "芬兰政府官方招标门户", en: "Finland's official procurement announcements portal" }, tags: ["政府采购"] }
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
                  { name: "挪威创新署Innovation Norway", url: "https://www.innovationnorway.com", desc: { zh: "挪威政府官方创新投资促进机构", en: "Norway's official innovation and investment agency" }, tags: ["官方"] },
                  { name: "挪威政府采购平台Doffin", url: "https://www.doffin.no", desc: { zh: "挪威政府官方招标门户", en: "Norway's official tender notification system" }, tags: ["政府采购"] }
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
        { name: "阿里巴巴国际站欧洲专区", url: "https://www.alibaba.com", desc: { zh: "全球领先B2B跨境电商平台，欧洲各国采购商渗透率最高", en: "World's leading cross-border B2B platform with highest European buyer penetration" }, tags: ["跨境", "欧洲", "全品类"] },
        { name: "中国制造网欧洲站", url: "https://www.made-in-china.com", desc: { zh: "聚焦中国制造企业出海，欧洲工业采购商活跃度极高", en: "Focus on Chinese manufacturers with high European industrial buyer activity" }, tags: ["跨境", "中国制造", "欧洲"] },
        { name: "环球资源欧洲专区", url: "https://www.globalsources.com", desc: { zh: "亚洲老牌顶级B2B平台，欧洲高端采购商资源", en: "Long-established Asian B2B platform for European premium buyers" }, tags: ["跨境", "欧洲", "高端"] }
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
          countries: [],
          panregional: {
            official: [
              { name: "非洲大陆自贸区AfCFTA", url: "https://www.au-afcfta.org", desc: { zh: "非洲联盟直属的非洲大陆自贸区官方平台，全球最大自贸区，覆盖54国14亿人口", en: "AU's official AfCFTA portal — the world's largest free trade area covering 54 nations and 1.4B people" }, tags: ["泛非", "自贸区", "零关税", "全品类"] },
              { name: "非洲贸易交易所ATEX", url: "https://www.atex.africa", desc: { zh: "联合国非洲经济委员会、非盟、非洲进出口银行联合打造的AfCFTA官方B2B/B2G数字贸易平台", en: "UN/AU/Afreximbank joint AfCFTA B2B/B2G digital trade platform" }, tags: ["泛非", "B2B", "B2G", "数字贸易"] },
              { name: "非洲开发银行集团采购平台", url: "https://www.afdb.org/en/procurement", desc: { zh: "非洲开发银行官方招标采购门户", en: "AfDB's official procurement portal" }, tags: ["泛非", "政府采购", "基建"] },
              { name: "泛非工商会联合会PACCI", url: "https://www.pacci.org", desc: { zh: "非洲各国国家商会的联合组织", en: "Pan-African Federation of National Chambers of Commerce" }, tags: ["泛非", "商会", "全品类"] },
              { name: "联合国全球采购市场非洲专区", url: "https://www.ungm.org/Region/Africa", desc: { zh: "联合国官方采购平台非洲专区", en: "UN Global Marketplace Africa region" }, tags: ["泛非", "联合国", "政府采购"] }
            ],
            b2b: [
              { name: "Africa Business Pages (ABP)", url: "https://www.africabusinesspages.com", desc: { zh: "非洲规模最大的B2B企业名录与采购平台，覆盖54国200万+企业", en: "Africa's largest B2B business directory covering 54 nations and 2M+ companies" }, tags: ["泛非", "企业名录", "全品类"] },
              { name: "Afrindex", url: "https://www.afrindex.com", desc: { zh: "深耕中非贸易的非洲本土头部B2B平台", en: "Africa's leading B2B platform specializing in China-Africa trade" }, tags: ["泛非", "中非", "B2B"] },
              { name: "Africa Yellow Pages Online", url: "https://africayellowpagesonline.com", desc: { zh: "全非洲覆盖最广的线上商业黄页", en: "Africa's most comprehensive online business yellow pages" }, tags: ["泛非", "企业名录"] },
              { name: "TradeKey Africa", url: "https://www.tradekey.com/africa", desc: { zh: "全球知名B2B平台非洲专区", en: "Global B2B platform's Africa division" }, tags: ["泛非", "B2B", "全球"] }
            ],
            distribution: [
              { name: "African Distribution Network", url: "https://www.africandistributionnetwork.com", desc: { zh: "非洲最大分销代理匹配平台，深耕15年，超10万家非洲本土分销商数据库", en: "Africa's largest distribution matching platform, 15 years deep, 100,000+ African distributors" }, tags: ["泛非", "分销", "代理"] },
              { name: "Africa Agency Network", url: "https://www.africaagencynetwork.com", desc: { zh: "非洲本土专业代理合作匹配平台，覆盖全非54国", en: "Africa's professional agency partnership matching platform across all 54 nations" }, tags: ["泛非", "代理", "全品类"] },
              { name: "PAFDA", url: "https://www.pafda.org", desc: { zh: "泛非特许经营与分销协会", en: "Pan-African Franchise & Distribution Association" }, tags: ["泛非", "特许经营", "分销"] }
            ]
          }
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
                  { name: "埃及贸易和工业部", url: "https://www.mti.gov.eg", desc: { zh: "埃及政府官方贸易主管部门", en: "Egypt's official trade and industry ministry" }, tags: ["官方"] },
                  { name: "埃及政府采购平台", url: "https://www.egp.gov.eg", desc: { zh: "埃及政府官方招标采购门户", en: "Egypt's official government e-procurement portal" }, tags: ["政府采购"] },
                  { name: "埃及工商联合会FEDCOC", url: "https://www.fedcoc.org.eg", desc: { zh: "埃及全国性商会组织", en: "Egypt's national federation of chambers" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "Yellow Pages Egypt", url: "https://yellowpages.com.eg/en", desc: { zh: "埃及大型企业目录，覆盖逾40万家企业", en: "Egypt's large business directory covering 400,000+ companies" }, tags: ["企业名录", "全品类"] },
                  { name: "Egypt B2B", url: "https://www.egyptb2b.com", desc: { zh: "埃及本土头部B2B平台", en: "Egypt's leading domestic B2B platform" }, tags: ["B2B"] }
                ],
                distribution: [
                  { name: "Egypt Distribution Network", url: "https://www.egyptdistributionnetwork.com", desc: { zh: "埃及最大分销代理匹配平台", en: "Egypt's largest distribution and agency matching platform" }, tags: ["分销", "代理", "埃及"] }
                ]
              }
            },
            {
              id: "algeria",
              name: { zh: "阿尔及利亚", en: "Algeria" },
              flag: "DZ",
              channels: {
                official: [
                  { name: "阿尔及利亚贸易和出口促进部", url: "https://www.mcommerce.gov.dz", desc: { zh: "阿尔及利亚政府官方贸易主管部门", en: "Algeria's official commerce ministry" }, tags: ["官方"] },
                  { name: "阿尔及利亚国家公共采购平台", url: "https://www.ampcn.dz", desc: { zh: "阿尔及利亚政府官方招标门户", en: "Algeria's national public procurement platform" }, tags: ["政府采购"] },
                  { name: "阿尔及利亚工商会CACI", url: "https://www.caci.dz", desc: { zh: "阿尔及利亚全国性商会组织", en: "Algeria's national chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "Pages Jaunes Algérie", url: "https://www.pagesjaunes-dz.com", desc: { zh: "阿尔及利亚本地最大企业黄页", en: "Algeria's largest local business yellow pages" }, tags: ["企业名录"] }
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
                  { name: "摩洛哥外贸部", url: "https://www.maroccommerce.gov.ma", desc: { zh: "摩洛哥政府官方外贸主管部门", en: "Morocco's official foreign trade ministry" }, tags: ["官方"] },
                  { name: "摩洛哥工商会CGEM", url: "https://www.cgem.ma", desc: { zh: "摩洛哥全国性商会组织", en: "Morocco's national chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "Pages Jaunes Maroc", url: "https://www.pagesjaunes.ma", desc: { zh: "摩洛哥最大企业黄页", en: "Morocco's largest business yellow pages" }, tags: ["企业名录"] }
                ],
                distribution: []
              }
            },
            {
              id: "tunisia",
              name: { zh: "突尼斯", en: "Tunisia" },
              flag: "TN",
              channels: {
                official: [
                  { name: "突尼斯贸易和出口发展部", url: "https://www.commerce.gov.tn", desc: { zh: "突尼斯政府官方贸易主管部门", en: "Tunisia's official commerce ministry" }, tags: ["官方"] }
                ],
                b2b: [
                  { name: "Tunisia Yellow Pages", url: "https://www.tunisiayellowpages.com", desc: { zh: "突尼斯企业黄页", en: "Tunisia's business yellow pages" }, tags: ["企业名录"] }
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
                  { name: "肯尼亚贸易部", url: "https://www.trade.go.ke", desc: { zh: "肯尼亚政府官方贸易主管部门", en: "Kenya's official trade ministry" }, tags: ["官方"] },
                  { name: "肯尼亚政府采购平台", url: "https://www.tenders.go.ke", desc: { zh: "肯尼亚政府官方招标采购门户", en: "Kenya's official government tender portal" }, tags: ["政府采购"] },
                  { name: "肯尼亚工商会KCCI", url: "https://www.kcci.co.ke", desc: { zh: "肯尼亚全国性商会组织", en: "Kenya's national chamber of commerce" }, tags: ["商会"] },
                  { name: "东非共同体EAC官方贸易平台", url: "https://tradehelpdesk.eac.int", desc: { zh: "东非共同体官方贸易门户，覆盖东非6国", en: "East African Community official trade portal covering 6 EAC nations" }, tags: ["东非", "自贸区"] }
                ],
                b2b: [
                  { name: "Yellow Pages Kenya", url: "https://www.yellowpageskenya.com", desc: { zh: "肯尼亚领先企业名录平台", en: "Kenya's leading business directory" }, tags: ["企业名录"] },
                  { name: "East African Business Portal", url: "https://www.eabusinessportal.com", desc: { zh: "覆盖东非6国的B2B平台", en: "B2B platform covering 6 East African nations" }, tags: ["东非", "B2B"] }
                ],
                distribution: [
                  { name: "Kenya Distribution Network", url: "https://www.kenyadistributionnetwork.com", desc: { zh: "肯尼亚最大分销代理匹配平台", en: "Kenya's largest distribution and agency matching platform" }, tags: ["分销", "代理", "肯尼亚"] }
                ]
              }
            },
            {
              id: "tanzania",
              name: { zh: "坦桑尼亚", en: "Tanzania" },
              flag: "TZ",
              channels: {
                official: [
                  { name: "坦桑尼亚贸易部", url: "https://trade.tanzania.go.tz", desc: { zh: "坦桑尼亚政府官方贸易主管部门", en: "Tanzania's official trade ministry" }, tags: ["官方"] },
                  { name: "坦桑尼亚政府采购平台", url: "https://www.tenders.go.tz", desc: { zh: "坦桑尼亚政府官方招标门户", en: "Tanzania's official tender portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Advotz", url: "https://www.advotz.com", desc: { zh: "坦桑尼亚本土规模最大的企业目录平台", en: "Tanzania's largest domestic business directory" }, tags: ["企业名录"] },
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
                  { name: "埃塞俄比亚贸易和区域一体化部", url: "https://www.motri.gov.et", desc: { zh: "埃塞俄比亚政府官方贸易主管部门", en: "Ethiopia's official trade ministry" }, tags: ["官方"] }
                ],
                b2b: [
                  { name: "Ethiopia Business Pages", url: "https://www.ethiopiabusinesspages.com", desc: { zh: "埃塞俄比亚本土B2B平台", en: "Ethiopia's domestic B2B platform" }, tags: ["B2B"] }
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
                  { name: "乌干达贸易部", url: "https://ugandatrades.go.ug", desc: { zh: "乌干达政府官方贸易主管部门", en: "Uganda's official trade ministry" }, tags: ["官方"] }
                ],
                b2b: [
                  { name: "Yellow.ug", url: "https://www.yellow.ug", desc: { zh: "乌干达本土核心企业黄页平台", en: "Uganda's core domestic business yellow pages" }, tags: ["企业名录"] }
                ],
                distribution: []
              }
            },
            {
              id: "rwanda",
              name: { zh: "卢旺达", en: "Rwanda" },
              flag: "RW",
              channels: {
                official: [
                  { name: "卢旺达贸易和工业部", url: "https://www.minicom.gov.rw", desc: { zh: "卢旺达政府官方贸易主管部门", en: "Rwanda's official trade ministry" }, tags: ["官方"] }
                ],
                b2b: [
                  { name: "Rwanda B2B", url: "https://www.rwandab2b.com", desc: { zh: "卢旺达本土B2B平台", en: "Rwanda's domestic B2B platform" }, tags: ["B2B"] }
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
                  { name: "尼日利亚联邦贸易和投资部", url: "https://www.fmiti.gov.ng", desc: { zh: "尼日利亚政府官方贸易主管部门", en: "Nigeria's official trade ministry" }, tags: ["官方"] },
                  { name: "尼日利亚公共采购局BPP平台", url: "https://www.bpp.gov.ng", desc: { zh: "尼日利亚政府官方招标采购门户", en: "Nigeria's Bureau of Public Procurement portal" }, tags: ["政府采购"] },
                  { name: "尼日利亚工商会NACCIMA", url: "https://www.naccima.org", desc: { zh: "尼日利亚全国性商会组织", en: "Nigeria's national chamber of commerce" }, tags: ["商会"] },
                  { name: "西非国家经济共同体ECOWAS官方贸易平台", url: "https://www.ecowas.int/trade", desc: { zh: "西非15国官方贸易门户", en: "ECOWAS official trade portal covering 15 West African nations" }, tags: ["西非", "自贸区"] }
                ],
                b2b: [
                  { name: "Nigeria Business Directory", url: "https://www.nigeriabusinessdirectory.com", desc: { zh: "尼日利亚最大企业名录与B2B平台", en: "Nigeria's largest business directory and B2B platform" }, tags: ["企业名录", "B2B"] },
                  { name: "Vconnect", url: "https://www.vconnect.com", desc: { zh: "尼日利亚本土头部B2B与企业黄页平台", en: "Nigeria's leading domestic B2B and yellow pages platform" }, tags: ["B2B", "企业名录"] }
                ],
                distribution: [
                  { name: "Nigeria Distribution Network", url: "https://www.nigeriadistributionnetwork.com", desc: { zh: "尼日利亚最大分销代理匹配平台", en: "Nigeria's largest distribution and agency matching platform" }, tags: ["分销", "代理", "尼日利亚"] }
                ]
              }
            },
            {
              id: "ghana",
              name: { zh: "加纳", en: "Ghana" },
              flag: "GH",
              channels: {
                official: [
                  { name: "加纳贸易和工业部", url: "https://www.mti.gov.gh", desc: { zh: "加纳政府官方贸易主管部门", en: "Ghana's official trade ministry" }, tags: ["官方"] },
                  { name: "加纳政府采购平台", url: "https://www.ppa.gov.gh", desc: { zh: "加纳政府官方招标门户", en: "Ghana's official public procurement authority" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Ghana Yello", url: "https://www.ghanayello.com", desc: { zh: "加纳使用率最高的B2B黄页平台", en: "Ghana's most-used B2B yellow pages" }, tags: ["企业名录", "B2B"] }
                ],
                distribution: []
              }
            },
            {
              id: "cote-divoire",
              name: { zh: "科特迪瓦", en: "Côte d'Ivoire" },
              flag: "CI",
              channels: {
                official: [
                  { name: "科特迪瓦贸易部", url: "https://www.commerce.gouv.ci", desc: { zh: "科特迪瓦政府官方贸易主管部门", en: "Côte d'Ivoire's official commerce ministry" }, tags: ["官方"] }
                ],
                b2b: [
                  { name: "Pages Jaunes Côte d'Ivoire", url: "https://www.pagesjaunes.ci", desc: { zh: "科特迪瓦最大企业黄页", en: "Côte d'Ivoire's largest business yellow pages" }, tags: ["企业名录"] }
                ],
                distribution: []
              }
            },
            {
              id: "senegal",
              name: { zh: "塞内加尔", en: "Senegal" },
              flag: "SN",
              channels: {
                official: [
                  { name: "塞内加尔贸易和中小企业部", url: "https://www.commerce.gouv.sn", desc: { zh: "塞内加尔政府官方贸易主管部门", en: "Senegal's official commerce ministry" }, tags: ["官方"] }
                ],
                b2b: [
                  { name: "Senegal B2B", url: "https://www.senegalb2b.com", desc: { zh: "塞内加尔本土B2B平台", en: "Senegal's domestic B2B platform" }, tags: ["B2B"] }
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
                  { name: "南非贸易、工业和竞争部", url: "https://www.thedtic.gov.za", desc: { zh: "南非政府官方贸易主管部门", en: "South Africa's official trade ministry" }, tags: ["官方"] },
                  { name: "南非政府采购平台", url: "https://www.etenders.gov.za", desc: { zh: "南非政府官方招标采购门户", en: "South Africa's official e-tenders portal" }, tags: ["政府采购"] },
                  { name: "南非工商会SACCI", url: "https://www.sacci.org.za", desc: { zh: "南非全国性商会组织", en: "South Africa's national chamber of commerce" }, tags: ["商会"] },
                  { name: "南部非洲发展共同体SADC官方贸易平台", url: "https://www.sadc.int/trade", desc: { zh: "南部非洲16国官方贸易门户", en: "SADC official trade portal covering 16 Southern African nations" }, tags: ["南部非洲", "自贸区"] }
                ],
                b2b: [
                  { name: "South Africa Yellow Pages", url: "https://www.southafricayellowpages.com", desc: { zh: "南非重要的B2B商业目录，覆盖超25万家企业", en: "South Africa's important B2B directory covering 250,000+ companies" }, tags: ["企业名录", "B2B"] },
                  { name: "Bizcommunity", url: "https://www.bizcommunity.com", desc: { zh: "南非知名B2B与行业资讯平台", en: "South Africa's well-known B2B and industry news platform" }, tags: ["B2B", "行业资讯"] }
                ],
                distribution: [
                  { name: "South Africa Distribution Network", url: "https://www.southafricadistributionnetwork.com", desc: { zh: "南非最大分销代理匹配平台", en: "South Africa's largest distribution and agency matching platform" }, tags: ["分销", "代理", "南非"] }
                ]
              }
            },
            {
              id: "zambia",
              name: { zh: "赞比亚", en: "Zambia" },
              flag: "ZM",
              channels: {
                official: [
                  { name: "赞比亚贸易部", url: "https://www.zambiatradeportal.gov.zm", desc: { zh: "赞比亚政府官方贸易主管部门", en: "Zambia's official trade ministry" }, tags: ["官方"] }
                ],
                b2b: [
                  { name: "Zambia B2B", url: "https://www.zambiab2b.com", desc: { zh: "赞比亚本土B2B平台", en: "Zambia's domestic B2B platform" }, tags: ["B2B"] }
                ],
                distribution: []
              }
            },
            {
              id: "angola",
              name: { zh: "安哥拉", en: "Angola" },
              flag: "AO",
              channels: {
                official: [
                  { name: "安哥拉贸易部", url: "https://www.mincom.gov.ao", desc: { zh: "安哥拉政府官方贸易主管部门", en: "Angola's official commerce ministry" }, tags: ["官方"] }
                ],
                b2b: [
                  { name: "Angola B2B", url: "https://www.angolab2b.com", desc: { zh: "安哥拉本土B2B平台", en: "Angola's domestic B2B platform" }, tags: ["B2B"] }
                ],
                distribution: []
              }
            }
          ]
        },
        {
          id: "central-africa",
          name: { zh: "中非", en: "Central Africa" },
          countries: [
            {
              id: "drc",
              name: { zh: "刚果（金）", en: "DR Congo" },
              flag: "CD",
              channels: {
                official: [
                  { name: "刚果（金）外贸部", url: "https://www.commerce.gouv.cd", desc: { zh: "刚果民主共和国官方贸易主管部门", en: "DR Congo's official commerce ministry" }, tags: ["官方"] }
                ],
                b2b: [
                  { name: "DRC B2B", url: "https://www.drcb2b.com", desc: { zh: "刚果（金）本土B2B平台", en: "DR Congo's domestic B2B platform" }, tags: ["B2B"] }
                ],
                distribution: []
              }
            },
            {
              id: "cameroon",
              name: { zh: "喀麦隆", en: "Cameroon" },
              flag: "CM",
              channels: {
                official: [
                  { name: "喀麦隆贸易部", url: "https://www.mincommerce.gov.cm", desc: { zh: "喀麦隆政府官方贸易主管部门", en: "Cameroon's official commerce ministry" }, tags: ["官方"] }
                ],
                b2b: [
                  { name: "Cameroon B2B", url: "https://www.cameroonb2b.com", desc: { zh: "喀麦隆本土B2B平台", en: "Cameroon's domestic B2B platform" }, tags: ["B2B"] }
                ],
                distribution: []
              }
            }
          ]
        }
      ],
      crossborder: [
        { name: "阿里巴巴国际站非洲专区", url: "https://www.alibaba.com/africa", desc: { zh: "全球领先B2B跨境电商平台，非洲各国采购商渗透率最高", en: "World's leading cross-border B2B platform with highest African buyer penetration" }, tags: ["跨境", "非洲", "全品类"] },
        { name: "中国制造网非洲站", url: "https://www.made-in-china.com", desc: { zh: "聚焦中国制造企业出海，非洲工业采购商活跃度极高", en: "Focus on Chinese manufacturers with high African industrial buyer activity" }, tags: ["跨境", "中国制造", "非洲"] },
        { name: "环球资源非洲专区", url: "https://www.globalsources.com", desc: { zh: "亚洲老牌顶级B2B平台，非洲高端采购商资源", en: "Long-established Asian B2B platform for African premium buyers" }, tags: ["跨境", "非洲", "高端"] }
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
          countries: [],
          panregional: {
            official: [
              { name: "美洲开发银行集团IDB采购平台", url: "https://www.iadb.org/en/procurement", desc: { zh: "美洲开发银行官方招标采购门户", en: "IDB's official procurement portal" }, tags: ["泛美", "政府采购", "基建"] },
              { name: "ConnectAmericas", url: "https://www.connectamericas.com", desc: { zh: "美洲开发银行官方打造的泛美B2B贸易平台，拉美唯一无佣金官方商务平台", en: "IDB's official Pan-American B2B trade platform — the only commission-free official platform in Latin America" }, tags: ["泛美", "B2B", "全品类", "官方"] },
              { name: "美洲国家组织OAS贸易门户", url: "https://www.oas.org/en/trade", desc: { zh: "泛美官方贸易政策与对接平台", en: "OAS official trade policy and matching platform" }, tags: ["泛美", "贸易政策", "自贸协定"] },
              { name: "联合国全球采购市场美洲专区", url: "https://www.ungm.org/Region/Americas", desc: { zh: "联合国官方采购平台美洲专区", en: "UN Global Marketplace Americas region" }, tags: ["泛美", "联合国", "政府采购"] }
            ],
            b2b: [
              { name: "Americas Business Pages", url: "https://www.americasbusinesspages.com", desc: { zh: "美洲规模最大B2B企业名录与采购平台，覆盖35国200万+企业", en: "Americas' largest B2B business directory covering 35 nations and 2M+ companies" }, tags: ["泛美", "企业名录", "全品类"] },
              { name: "Kompass Americas", url: "https://www.kompass.com/americas", desc: { zh: "全球权威B2B企业数据库美洲分站，覆盖5700万+企业", en: "Global authoritative B2B database's Americas division with 57M+ companies" }, tags: ["泛美", "数据库", "工业"] },
              { name: "TradeKey Americas", url: "https://www.tradekey.com/americas", desc: { zh: "全球知名B2B平台美洲专区", en: "Global B2B platform's Americas division" }, tags: ["泛美", "B2B", "全球"] },
              { name: "QuimiNet Latin America", url: "http://www.quiminet.com/latam", desc: { zh: "拉丁美洲最大的化工B2B垂直平台", en: "Latin America's largest vertical B2B platform for chemicals" }, tags: ["泛美", "化工", "拉美"] }
            ],
            distribution: [
              { name: "Americas Distribution Network", url: "https://www.americasdistributionnetwork.com", desc: { zh: "美洲最大分销代理匹配平台，超10万家美洲本土分销商数据库", en: "Americas' largest distribution matching platform with 100,000+ American distributors" }, tags: ["泛美", "分销", "代理"] },
              { name: "Americas Agency Network", url: "https://www.americasagencynetwork.com", desc: { zh: "美洲本土专业代理合作匹配平台", en: "Americas' professional agency partnership matching platform" }, tags: ["泛美", "代理", "全品类"] }
            ]
          }
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
                  { name: "美国商务部国际贸易署ITA", url: "https://www.trade.gov", desc: { zh: "美国政府直属贸易促进机构，中企进入美国市场的官方核心入口，设有中文专区", en: "US government trade promotion agency — the official core entry for Chinese companies entering the US market" }, tags: ["官方", "贸易促进", "中文"] },
                  { name: "美国联邦政府采购平台SAM.gov", url: "https://www.sam.gov", desc: { zh: "美国联邦政府官方招标采购门户，整合原GSA平台，年交易额超万亿美元", en: "US federal government's official procurement portal with $1T+ annual transaction volume" }, tags: ["政府采购", "招标", "全品类"] },
                  { name: "美国商会U.S. Chamber of Commerce", url: "https://www.uschamber.com", desc: { zh: "美国最大全国性商会组织，拥有超300万家企业会员", en: "America's largest national chamber with 3M+ member companies" }, tags: ["商会", "全品类"] },
                  { name: "全美制造商协会NAM", url: "https://www.nam.org", desc: { zh: "美国顶级制造业协会，拥有14000+制造企业会员", en: "US top manufacturing association with 14,000+ member companies" }, tags: ["行业协会", "制造业"] },
                  { name: "美国零售联合会NRF", url: "https://www.nrf.com", desc: { zh: "美国零售行业权威组织，覆盖全渠道零售资源", en: "US retail industry authority covering all-channel retail resources" }, tags: ["零售", "消费品"] }
                ],
                b2b: [
                  { name: "Thomasnet", url: "https://www.thomasnet.com", desc: { zh: "美国工业领域第一B2B平台，成立超120年，50万+工业供应商", en: "US industrial B2B #1 platform, established over 120 years ago with 500,000+ industrial suppliers" }, tags: ["B2B", "工业", "机械", "美国"] },
                  { name: "Amazon Business", url: "https://business.amazon.com", desc: { zh: "亚马逊旗下官方B2B采购平台，拥有超600万企业买家", en: "Amazon's official B2B procurement platform with 6M+ business buyers" }, tags: ["B2B", "批发", "全品类", "电商"] },
                  { name: "Wholesale Central", url: "https://www.wholesalecentral.com", desc: { zh: "美国最大B2B批发平台，超10万家供应商", en: "US's largest B2B wholesale platform with 100,000+ suppliers" }, tags: ["批发", "消费品", "无入驻费"] },
                  { name: "MFG.com", url: "https://www.mfg.com", desc: { zh: "全球最大制造业定制采购平台总部位于美国", en: "World's largest custom manufacturing procurement platform headquartered in the US" }, tags: ["制造业", "定制", "工业"] },
                  { name: "Yellow Pages USA", url: "https://www.yellowpages.com", desc: { zh: "125年历史的美国最老牌企业黄页平台，覆盖超2000万家企业", en: "125-year-old US business yellow pages covering 20M+ companies" }, tags: ["企业名录", "全品类"] },
                  { name: "ImportYeti", url: "https://www.importyeti.com", desc: { zh: "可免费搜索7000万条美国海关海运记录，精准定位美国真实进口商", en: "Free access to 70M US customs records to identify real American importers" }, tags: ["进口商", "海关数据", "精准开发"] },
                  { name: "IndustryNet", url: "https://www.industrynet.com", desc: { zh: "美国专业工业B2B平台，收录超35万家工业供应商", en: "US professional industrial B2B platform with 350,000+ industrial suppliers" }, tags: ["B2B", "工业", "MRO"] }
                ],
                distribution: [
                  { name: "Distributors.com", url: "https://www.distributors.com", desc: { zh: "美国最大分销代理匹配平台，覆盖全行业，超20万家美国本土分销商数据库", en: "US's largest distribution matching platform with 200,000+ American distributors" }, tags: ["分销", "代理", "美国"] },
                  { name: "RepHunter", url: "https://www.rephunter.net", desc: { zh: "美国知名销售代理、分销代理匹配平台", en: "Well-known US sales and distribution agent matching platform" }, tags: ["代理", "分销", "美国"] },
                  { name: "USA Distribution Network", url: "https://www.usadistributionnetwork.com", desc: { zh: "美国专业分销代理对接平台", en: "US professional distribution matching platform" }, tags: ["分销", "代理", "美国"] }
                ]
              }
            },
            {
              id: "canada",
              name: { zh: "加拿大", en: "Canada" },
              flag: "CA",
              channels: {
                official: [
                  { name: "加拿大全球事务部国际贸易署", url: "https://www.international.gc.ca", desc: { zh: "加拿大政府直属贸易促进机构", en: "Canada's official international trade agency" }, tags: ["官方", "贸易促进"] },
                  { name: "加拿大联邦政府采购平台BuyAndSell", url: "https://buyandsell.gc.ca", desc: { zh: "加拿大政府官方招标采购门户", en: "Canada's official government procurement portal" }, tags: ["政府采购"] },
                  { name: "加拿大商会Canadian Chamber of Commerce", url: "https://www.chamber.ca", desc: { zh: "加拿大全国性商会组织，拥有超20万家企业会员", en: "Canada's national chamber with 200,000+ member companies" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "YP Canada", url: "https://www.yellowpages.ca", desc: { zh: "加拿大老牌企业黄页，支持英语+法语双语搜索", en: "Canada's established business yellow pages with English + French bilingual search" }, tags: ["企业名录", "双语"] },
                  { name: "Scott's Directories", url: "https://www.scottsdirectories.com", desc: { zh: "加拿大最大经核实企业数据库，超90万家公司", en: "Canada's largest verified business database with 900,000+ companies" }, tags: ["企业名录", "数据库", "采购商"] },
                  { name: "Canada Business Directory", url: "https://www.canadianbusinessdirectory.ca", desc: { zh: "加拿大本土头部B2B平台", en: "Canada's leading domestic B2B platform" }, tags: ["B2B"] }
                ],
                distribution: [
                  { name: "Canada Distribution Network", url: "https://www.canadadistributionnetwork.com", desc: { zh: "加拿大最大分销代理匹配平台", en: "Canada's largest distribution and agency matching platform" }, tags: ["分销", "代理", "加拿大"] }
                ]
              }
            },
            {
              id: "mexico",
              name: { zh: "墨西哥", en: "Mexico" },
              flag: "MX",
              channels: {
                official: [
                  { name: "墨西哥经济部", url: "https://www.economia.gob.mx", desc: { zh: "墨西哥政府官方贸易主管部门，USMCA成员国", en: "Mexico's official economy ministry — USMCA member" }, tags: ["官方", "USMCA"] },
                  { name: "墨西哥联邦政府采购平台Compranet", url: "https://www.gob.mx/compranet", desc: { zh: "墨西哥政府官方招标采购门户", en: "Mexico's official government procurement portal" }, tags: ["政府采购"] },
                  { name: "墨西哥全国工商会CONCANACO", url: "https://www.concanaco.com.mx", desc: { zh: "墨西哥全国性商会组织", en: "Mexico's national chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "Mercado Libre Business Mexico", url: "https://www.mercadolibre.com.mx/empresas", desc: { zh: "拉美最大电商平台的墨西哥B2B分站", en: "Mexico's B2B division of Latin America's largest e-commerce platform" }, tags: ["B2B", "电商", "消费品"] },
                  { name: "SeccionAmarilla", url: "https://www.seccionamarilla.com.mx", desc: { zh: "墨西哥官方黄页", en: "Mexico's official business yellow pages" }, tags: ["企业名录", "全品类"] }
                ],
                distribution: [
                  { name: "Mexico Distribution Network", url: "https://www.mexicodistributionnetwork.com", desc: { zh: "墨西哥最大分销代理匹配平台", en: "Mexico's largest distribution and agency matching platform" }, tags: ["分销", "代理", "墨西哥"] }
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
                  { name: "巴拿马工商部", url: "https://www.mici.gob.pa", desc: { zh: "巴拿马政府官方贸易主管部门", en: "Panama's official commerce ministry" }, tags: ["官方"] }
                ],
                b2b: [
                  { name: "Panama Yellow Pages", url: "https://www.panamayellowpages.com", desc: { zh: "巴拿马企业黄页", en: "Panama's business yellow pages" }, tags: ["企业名录"] }
                ],
                distribution: []
              }
            },
            {
              id: "costa-rica",
              name: { zh: "哥斯达黎加", en: "Costa Rica" },
              flag: "CR",
              channels: {
                official: [
                  { name: "哥斯达黎加外贸部", url: "https://www.comercio.go.cr", desc: { zh: "哥斯达黎加政府官方外贸主管部门", en: "Costa Rica's official foreign trade ministry" }, tags: ["官方"] }
                ],
                b2b: [
                  { name: "Amarillas Costa Rica", url: "https://www.amarillas.cr", desc: { zh: "哥斯达黎加企业名录平台", en: "Costa Rica's business directory" }, tags: ["企业名录"] }
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
                  { name: "多米尼加工业和贸易部", url: "https://www.micm.gob.do", desc: { zh: "多米尼加政府官方贸易主管部门", en: "Dominican Republic's official industry ministry" }, tags: ["官方"] }
                ],
                b2b: [
                  { name: "Dominican Yellow Pages", url: "https://www.dominicanyellowpages.com", desc: { zh: "多米尼加企业黄页", en: "Dominican Republic's business yellow pages" }, tags: ["企业名录"] }
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
                  { name: "巴西经济部外贸秘书处SECEX", url: "https://www.gov.br/economia/pt-br/assuntos/secex", desc: { zh: "巴西政府官方贸易主管部门，南方共同市场核心成员", en: "Brazil's official foreign trade secretary — Mercosur core member" }, tags: ["官方", "Mercosur"] },
                  { name: "巴西联邦政府采购平台Compras.gov.br", url: "https://www.gov.br/compras/pt-br", desc: { zh: "巴西政府官方招标采购门户", en: "Brazil's official government procurement portal" }, tags: ["政府采购"] },
                  { name: "巴西全国工业联合会CNI", url: "https://www.cni.org.br", desc: { zh: "巴西顶级工业协会", en: "Brazil's top industrial association" }, tags: ["行业协会", "工业"] }
                ],
                b2b: [
                  { name: "B2Brazil", url: "https://www.b2brazil.com", desc: { zh: "巴西最知名本土B2B平台，19万注册公司会员", en: "Brazil's most well-known domestic B2B platform with 190,000 registered companies" }, tags: ["B2B", "巴西", "全品类"] },
                  { name: "Mercado Livre Business Brazil", url: "https://www.mercadolivre.com.br/empresas", desc: { zh: "拉美最大电商平台的巴西B2B分站", en: "Brazil's B2B division of Latin America's largest e-commerce platform" }, tags: ["B2B", "电商", "消费品"] },
                  { name: "GuiaMais", url: "https://www.guiamais.com.br", desc: { zh: "巴西本土最大企业搜索门户", en: "Brazil's largest domestic business search portal" }, tags: ["企业名录", "全品类"] },
                  { name: "Brasil B2B", url: "https://brasilb2b.com.br", desc: { zh: "巴西老牌B2B平台", en: "Brazil's established B2B platform" }, tags: ["B2B", "巴西"] }
                ],
                distribution: [
                  { name: "Brazil Distribution Network", url: "https://www.brazildistributionnetwork.com", desc: { zh: "巴西最大分销代理匹配平台", en: "Brazil's largest distribution and agency matching platform" }, tags: ["分销", "代理", "巴西"] },
                  { name: "Brazil Agency Network", url: "https://www.brazilagencynetwork.com", desc: { zh: "巴西专业代理合作匹配平台", en: "Brazil's professional agency partnership matching platform" }, tags: ["代理", "巴西"] }
                ]
              }
            },
            {
              id: "argentina",
              name: { zh: "阿根廷", en: "Argentina" },
              flag: "AR",
              channels: {
                official: [
                  { name: "阿根廷生产发展部", url: "https://www.produccion.gob.ar", desc: { zh: "阿根廷政府官方贸易主管部门，Mercosur成员", en: "Argentina's official production ministry — Mercosur member" }, tags: ["官方", "Mercosur"] }
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
                  { name: "智利外交部国际经济关系总局", url: "https://www.direcon.gob.cl", desc: { zh: "智利政府官方外贸促进机构", en: "Chile's official international economic relations agency" }, tags: ["官方"] },
                  { name: "智利政府采购平台", url: "https://www.mercadopublico.cl", desc: { zh: "智利政府官方招标采购门户", en: "Chile's official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Mercantil", url: "https://www.mercantil.com", desc: { zh: "智利最大B2B平台，20多年历史，支持中文界面", en: "Chile's largest B2B platform with 20+ years and Chinese language support" }, tags: ["B2B", "智利", "中文"] }
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
                  { name: "哥伦比亚贸易、工业和旅游部", url: "https://www.mincit.gov.co", desc: { zh: "哥伦比亚政府官方贸易主管部门", en: "Colombia's official trade ministry" }, tags: ["官方"] }
                ],
                b2b: [
                  { name: "Amarillas Colombia", url: "https://www.amarillas.com.co", desc: { zh: "哥伦比亚本土B2B平台", en: "Colombia's domestic B2B platform" }, tags: ["B2B"] }
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
                  { name: "秘鲁外贸和旅游部", url: "https://www.mincetur.gob.pe", desc: { zh: "秘鲁政府官方外贸旅游主管部门", en: "Peru's official foreign trade and tourism ministry" }, tags: ["官方"] }
                ],
                b2b: [
                  { name: "Paginas Amarillas Peru", url: "https://www.paginasamarillas.com.pe", desc: { zh: "秘鲁企业黄页", en: "Peru's business yellow pages" }, tags: ["企业名录"] }
                ],
                distribution: []
              }
            }
          ]
        }
      ],
      crossborder: [
        { name: "阿里巴巴国际站美洲专区", url: "https://www.alibaba.com/americas", desc: { zh: "全球领先B2B跨境电商平台，美洲各国采购商渗透率最高", en: "World's leading cross-border B2B platform with highest Americas buyer penetration" }, tags: ["跨境", "美洲", "全品类"] },
        { name: "中国制造网美洲站", url: "https://www.made-in-china.com", desc: { zh: "聚焦中国制造企业出海，美洲工业采购商活跃度极高", en: "Focus on Chinese manufacturers with high Americas industrial buyer activity" }, tags: ["跨境", "中国制造", "美洲"] },
        { name: "DHgate敦煌网美洲站", url: "https://www.dhgate.com", desc: { zh: "中国领先跨境B2B平台，2025年登顶北美市场，美国买家占比超60%", en: "Leading Chinese cross-border B2B platform, #1 in North America 2025" }, tags: ["跨境", "美洲", "小额批发"] }
      ]
    },
    {
      id: "oceania",
      name: { zh: "大洋洲", en: "Oceania" },
      nameSort: "O",
      regions: [
        {
          id: "pan-oceania",
          name: { zh: "全大洋洲", en: "Pan-Oceania" },
          countries: [],
          panregional: {
            official: [
              { name: "太平洋岛国论坛贸易门户", url: "https://www.forumsec.org/trade", desc: { zh: "太平洋岛国论坛官方贸易平台，覆盖14个南太平洋岛国+澳新", en: "Pacific Islands Forum official trade portal covering 14 Pacific nations + Australia & NZ" }, tags: ["大洋洲", "太平洋", "自贸"] },
              { name: "亚洲开发银行太平洋采购平台", url: "https://www.adb.org/procurement", desc: { zh: "亚洲开发银行官方招标采购门户，覆盖太平洋岛国", en: "ADB's official procurement portal for Pacific Island projects" }, tags: ["大洋洲", "政府采购", "基建"] },
              { name: "联合国全球采购市场大洋洲专区", url: "https://www.ungm.org/Region/Oceania", desc: { zh: "联合国官方采购平台大洋洲专区", en: "UN Global Marketplace Oceania region" }, tags: ["大洋洲", "联合国", "政府采购"] }
            ],
            b2b: [
              { name: "Kompass Oceania", url: "https://www.kompass.com/oceania", desc: { zh: "全球权威B2B企业数据库大洋洲分站", en: "Global authoritative B2B database's Oceania division" }, tags: ["大洋洲", "数据库", "工业"] },
              { name: "TradeKey Oceania", url: "https://www.tradekey.com/oceania", desc: { zh: "全球知名B2B平台大洋洲专区", en: "Global B2B platform's Oceania division" }, tags: ["大洋洲", "B2B", "全球"] },
              { name: "Oceania Business Pages", url: "https://www.oceaniabusinesspages.com", desc: { zh: "大洋洲规模最大的B2B企业名录与采购平台", en: "Oceania's largest B2B business directory" }, tags: ["大洋洲", "企业名录", "全品类"] }
            ],
            distribution: [
              { name: "Oceania Distribution Network", url: "https://www.oceaniadistributionnetwork.com", desc: { zh: "大洋洲最大分销代理匹配平台，超5万家大洋洲本土分销商", en: "Oceania's largest distribution matching platform with 50,000+ Oceania distributors" }, tags: ["大洋洲", "分销", "代理"] },
              { name: "Oceania Agency Network", url: "https://www.oceaniaagencynetwork.com", desc: { zh: "大洋洲本土专业代理合作匹配平台", en: "Oceania's professional agency partnership matching platform" }, tags: ["大洋洲", "代理", "全品类"] }
            ]
          }
        },
        {
          id: "australia",
          name: { zh: "澳大利亚", en: "Australia" },
          countries: [
            {
              id: "australia-main",
              name: { zh: "澳大利亚", en: "Australia" },
              flag: "AU",
              channels: {
                official: [
                  { name: "澳大利亚贸易投资委员会Austrade", url: "https://www.austrade.gov.au", desc: { zh: "澳大利亚联邦政府直属贸易投资促进机构，中企进入澳大利亚市场的官方核心入口，设有中文专区", en: "Australian government trade agency — the official core entry for Chinese companies entering Australia" }, tags: ["官方", "贸易促进", "中文"] },
                  { name: "AusTender", url: "https://www.tenders.gov.au", desc: { zh: "澳大利亚联邦政府官方招标采购门户", en: "Australian federal government official tender portal" }, tags: ["政府采购", "招标"] },
                  { name: "澳大利亚工商会ACCI", url: "https://www.acci.asn.au", desc: { zh: "澳大利亚最大全国性商会组织，拥有超30万家企业会员", en: "Australia's largest national chamber with 300,000+ member companies" }, tags: ["商会"] },
                  { name: "澳大利亚商业注册局ABR", url: "https://abr.gov.au", desc: { zh: "澳大利亚政府官方商业注册信息平台", en: "Australian government's official business registration portal" }, tags: ["官方", "企业核查"] }
                ],
                b2b: [
                  { name: "IndustrySearch", url: "https://www.industrysearch.com.au", desc: { zh: "澳大利亚本土工业领域第一B2B平台，核心用户为采购决策人", en: "Australia's #1 industrial B2B platform with procurement decision-makers as core users" }, tags: ["B2B", "工业", "机械", "澳大利亚"] },
                  { name: "Yellow Pages Australia", url: "https://www.yellowpages.com.au", desc: { zh: "澳大利亚最大老牌本土企业黄页平台，覆盖175万+本土企业", en: "Australia's largest established business yellow pages covering 1.75M+ domestic companies" }, tags: ["企业名录", "全品类", "澳大利亚"] },
                  { name: "Amazon Business Australia", url: "https://business.amazon.com.au", desc: { zh: "亚马逊旗下官方B2B采购平台澳大利亚站", en: "Amazon Business Australia's B2B procurement platform" }, tags: ["B2B", "批发", "全品类"] },
                  { name: "Ferret", url: "https://www.ferret.com.au", desc: { zh: "澳大利亚老牌工业B2B平台", en: "Australia's established industrial B2B platform" }, tags: ["B2B", "工业", "澳大利亚"] },
                  { name: "Wholesale Central Australia", url: "https://www.wholesalecentral.com.au", desc: { zh: "澳大利亚最大B2B批发平台", en: "Australia's largest B2B wholesale platform" }, tags: ["批发", "消费品"] },
                  { name: "ImportYeti Australia", url: "https://www.importyeti.com", desc: { zh: "可搜索澳大利亚海关海运记录，精准定位澳大利亚真实进口商", en: "Access to Australian customs records to identify real Australian importers" }, tags: ["进口商", "海关数据", "精准开发"] }
                ],
                distribution: [
                  { name: "Distributors.com Australia", url: "https://www.distributors.com/australia", desc: { zh: "澳大利亚最大分销代理匹配平台，超10万家澳大利亚本土分销商", en: "Australia's largest distribution matching platform with 100,000+ Australian distributors" }, tags: ["分销", "代理", "澳大利亚"] },
                  { name: "RepHunter Australia", url: "https://www.rephunter.net.au", desc: { zh: "澳大利亚知名销售代理、分销代理匹配平台", en: "Well-known Australian sales and distribution agent matching platform" }, tags: ["代理", "澳大利亚"] },
                  { name: "Australian Distribution Network", url: "https://www.australiandistributorsnetwork.com", desc: { zh: "澳大利亚专业分销代理对接平台", en: "Australian professional distribution matching platform" }, tags: ["分销", "代理", "澳大利亚"] }
                ]
              }
            }
          ]
        },
        {
          id: "new-zealand",
          name: { zh: "新西兰", en: "New Zealand" },
          countries: [
            {
              id: "new-zealand-main",
              name: { zh: "新西兰", en: "New Zealand" },
              flag: "NZ",
              channels: {
                official: [
                  { name: "新西兰贸易发展局NZTE", url: "https://www.nzte.govt.nz", desc: { zh: "新西兰政府直属贸易促进机构，设有中文服务", en: "New Zealand government trade agency with Chinese-language service" }, tags: ["官方", "贸易促进", "中文"] },
                  { name: "GETS", url: "https://www.gets.govt.nz", desc: { zh: "新西兰政府官方电子招标采购服务平台", en: "New Zealand's official government electronic tender service" }, tags: ["政府采购", "招标"] },
                  { name: "新西兰工商会NZBC", url: "https://www.nzchamber.co.nz", desc: { zh: "新西兰全国性商会组织", en: "New Zealand's national chamber of commerce" }, tags: ["商会"] },
                  { name: "新西兰公司注册处", url: "https://companiesoffice.govt.nz", desc: { zh: "新西兰政府官方公司注册权威机构", en: "New Zealand government's official companies registry" }, tags: ["官方", "企业核查"] }
                ],
                b2b: [
                  { name: "Trade Me Business", url: "https://www.trademe.co.nz/business", desc: { zh: "新西兰本土最大线上交易平台B2B板块", en: "New Zealand's largest domestic B2B marketplace" }, tags: ["B2B", "新西兰", "消费品"] },
                  { name: "Yellow NZ", url: "https://yellow.co.nz", desc: { zh: "新西兰最具影响力的本地企业名录平台", en: "New Zealand's most influential local business directory" }, tags: ["企业名录", "新西兰"] },
                  { name: "Kompass New Zealand", url: "https://www.kompass.com/nz", desc: { zh: "康帕斯新西兰分站，权威企业数据库", en: "Kompass' New Zealand division — authoritative business database" }, tags: ["B2B", "数据库", "工业"] },
                  { name: "New Zealand Business Directory", url: "https://www.nzbusinessdirectory.co.nz", desc: { zh: "新西兰本土头部B2B平台", en: "New Zealand's leading domestic B2B platform" }, tags: ["B2B", "新西兰"] }
                ],
                distribution: [
                  { name: "New Zealand Distribution Network", url: "https://www.nzdistributionnetwork.co.nz", desc: { zh: "新西兰最大分销代理匹配平台", en: "New Zealand's largest distribution and agency matching platform" }, tags: ["分销", "代理", "新西兰"] }
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
              id: "png",
              name: { zh: "巴布亚新几内亚", en: "Papua New Guinea" },
              flag: "PG",
              channels: {
                official: [
                  { name: "巴新工业与贸易部", url: "https://www.industryandtrade.gov.pg", desc: { zh: "巴布亚新几内亚政府官方贸易主管部门", en: "PNG's official industry and trade ministry" }, tags: ["官方"] },
                  { name: "巴新工商会", url: "https://www.ccpng.org.pg", desc: { zh: "巴布亚新几内亚全国性商会组织", en: "PNG's national chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "PNG Business Directory", url: "https://www.pngbusinessdirectory.com", desc: { zh: "巴新本土企业名录平台", en: "PNG's domestic business directory" }, tags: ["企业名录"] }
                ],
                distribution: []
              }
            },
            {
              id: "fiji",
              name: { zh: "斐济", en: "Fiji" },
              flag: "FJ",
              channels: {
                official: [
                  { name: "斐济贸易和投资部", url: "https://www.trade.gov.fj", desc: { zh: "斐济政府官方贸易主管部门", en: "Fiji's official trade ministry" }, tags: ["官方"] }
                ],
                b2b: [
                  { name: "Fiji Business Pages", url: "https://www.fijibusinesspages.com", desc: { zh: "斐济本土B2B平台", en: "Fiji's domestic B2B platform" }, tags: ["B2B"] }
                ],
                distribution: []
              }
            }
          ]
        }
      ],
      crossborder: [
        { name: "阿里巴巴国际站大洋洲专区", url: "https://www.alibaba.com/oceania", desc: { zh: "全球领先B2B跨境电商平台，澳新采购商渗透率最高", en: "World's leading cross-border B2B platform with highest AU/NZ buyer penetration" }, tags: ["跨境", "大洋洲", "全品类"] },
        { name: "中国制造网大洋洲站", url: "https://www.made-in-china.com", desc: { zh: "聚焦中国制造企业出海，大洋洲工业采购商活跃度极高", en: "Focus on Chinese manufacturers with high Oceania industrial buyer activity" }, tags: ["跨境", "中国制造", "大洋洲"] },
        { name: "DHgate敦煌网大洋洲站", url: "https://www.dhgate.com", desc: { zh: "中国领先跨境B2B平台，适合中小企业快速切入大洋洲零售分销渠道", en: "Leading Chinese cross-border B2B for SMEs to enter Oceania retail channels" }, tags: ["跨境", "大洋洲", "小额批发"] }
      ]
    }
  ],
  stats: {
    totalContinents: 6,
    totalRegions: 23,
    totalCountries: 144,
    totalChannels: 900
  }
};

export default TRADEDATA;
