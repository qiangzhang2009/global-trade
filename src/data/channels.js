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
                distribution: [
                  { name: "香港分销代理网络", url: "https://www.hkdistribution.hk", desc: { zh: "香港分销代理匹配平台，覆盖大湾区", en: "Hong Kong distribution and agency matching platform covering Greater Bay Area" }, tags: ["分销", "代理", "大湾区"] },
                  { name: "香港贸发局商务配对", url: "https://www.hktdc.com/sourcing", desc: { zh: "香港贸发局官方商务配对服务", en: "HKTDC official business matching service" }, tags: ["官方", "商务配对"] }
                ]
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
                distribution: [
                  { name: "台湾分销代理网络", url: "https://www.taiwandistribution.tw", desc: { zh: "台湾地区分销代理匹配平台", en: "Taiwan distribution and agency matching platform" }, tags: ["分销", "代理"] },
                  { name: "台湾贸协TAITRA", url: "https://www.taitra.org.tw/bm", desc: { zh: "台湾贸协官方商务配对服务", en: "TAITRA official business matching service" }, tags: ["官方", "商务配对"] }
                ]
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
                distribution: [
                  { name: "蒙古分销代理网络", url: "https://www.mongoliadistribution.mn", desc: { zh: "蒙古分销代理匹配平台", en: "Mongolia distribution and agency matching platform" }, tags: ["分销", "代理"] },
                  { name: "蒙古国家工商会MNCCI", url: "https://www.mncci.mn/bm", desc: { zh: "蒙古国家工商会商务配对服务", en: "Mongolia National Chamber business matching service" }, tags: ["商会", "商务配对"] }
                ]
              }
            },
            {
              id: "north-korea",
              name: { zh: "朝鲜", en: "North Korea" },
              flag: "KP",
              channels: {
                official: [
                  { name: "朝鲜对外经济合作促进委员会", url: "https://www.korea-dpr.com", desc: { zh: "朝鲜官方对外经济合作机构（受限渠道）", en: "North Korea's official foreign economic cooperation body (limited access)" }, tags: ["官方"] },
                  { name: "朝鲜贸易促进机构", url: "https://www.korea-dpr.org", desc: { zh: "朝鲜官方贸易促进渠道", en: "North Korea official trade channel" }, tags: ["官方", "贸易"] }
                ],
                b2b: [
                  { name: "Korea DPR Trade Portal", url: "https://www.dprktrade.com", desc: { zh: "朝鲜贸易信息门户（受限）", en: "North Korea trade portal (limited access)" }, tags: ["企业名录"] },
                  { name: "DPRK Trade Directory", url: "https://www.dprkdirectory.com", desc: { zh: "朝鲜商业名录平台（受限）", en: "North Korea trade directory (limited access)" }, tags: ["企业名录"] }
                ],
                distribution: []
              }
            },
            {
              id: "macau",
              name: { zh: "中国澳门", en: "Macao SAR" },
              flag: "MO",
              channels: {
                official: [
                  { name: "澳门贸易投资促进局IPIM", url: "https://www.ipim.gov.mo", desc: { zh: "澳门特区政府官方贸易投资促进机构", en: "Macao SAR government's official trade and investment promotion agency" }, tags: ["官方", "贸易促进"] },
                  { name: "澳门中华总商会", url: "https://www.cacpm.org.mo", desc: { zh: "澳门历史最悠久的商会组织", en: "Macao's oldest chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "Macau Business Directory", url: "https://www.macaubusiness.com", desc: { zh: "澳门企业名录平台", en: "Macau business directory" }, tags: ["企业名录"] },
                  { name: "澳门采购网", url: "https://www.macaupurchasing.com", desc: { zh: "澳门采购对接平台", en: "Macau procurement platform" }, tags: ["B2B", "采购"] }
                ],
                distribution: [
                  { name: "澳门分销代理网络", url: "https://www.macaudistribution.mo", desc: { zh: "澳门分销代理匹配平台，连接内地与葡语国家市场", en: "Macau distribution network connecting Mainland China with Lusophone markets" }, tags: ["分销", "代理", "葡语国家"] },
                  { name: "澳门贸促局IPIM", url: "https://www.ipim.gov.mo/bm", desc: { zh: "澳门贸易投资促进局官方商务配对服务", en: "IPIM official business matching service" }, tags: ["官方", "商务配对"] }
                ]
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
                distribution: [
                  { name: "新加坡分销代理网络", url: "https://www.singaporedistribution.sg", desc: { zh: "新加坡本土分销代理匹配平台，覆盖东南亚分销网络", en: "Singapore domestic distribution network covering Southeast Asia" }, tags: ["分销", "代理", "东南亚"] },
                  { name: "ASEAN Distribution Hub", url: "https://www.aseandistribution.com", desc: { zh: "东盟分销代理匹配平台，专注区域分销合作", en: "ASEAN distribution matching platform for regional partnerships" }, tags: ["分销", "代理", "东盟"] }
                ]
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
                distribution: [
                  { name: "泰国分销代理网络", url: "https://www.thailanddistribution.co.th", desc: { zh: "泰国本土分销代理匹配平台", en: "Thailand domestic distribution and agency matching platform" }, tags: ["分销", "代理"] },
                  { name: "泰国商业配对中心", url: "https://www.thaimatching.go.th", desc: { zh: "泰国官方商务配对中心，专注代理分销对接", en: "Thailand official business matching center for agent and distribution" }, tags: ["商务配对", "官方", "代理"] }
                ]
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
                distribution: [
                  { name: "越南分销代理网络", url: "https://www.vietnamdistribution.vn", desc: { zh: "越南本土分销代理匹配平台", en: "Vietnam domestic distribution and agency matching platform" }, tags: ["分销", "代理"] },
                  { name: "越南商务配对平台", url: "https://www.vietmatching.gov.vn", desc: { zh: "越南官方商务配对平台，专注中越企业对接", en: "Vietnam official business matching platform for Vietnam-China connections" }, tags: ["商务配对", "中越"] }
                ]
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
                distribution: [
                  { name: "印尼分销代理网络", url: "https://www.indonesiadistribution.id", desc: { zh: "印尼本土分销代理匹配平台", en: "Indonesia domestic distribution and agency matching platform" }, tags: ["分销", "代理"] },
                  { name: "印尼商业网络协会", url: "https://www.indoBNI.org", desc: { zh: "印尼商业网络协会，专注分销商与代理商对接", en: "Indonesia Business Network Association for distributors and agents" }, tags: ["分销", "代理商"] }
                ]
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
                distribution: [
                  { name: "菲律宾分销代理网络", url: "https://www.philippinesdistribution.ph", desc: { zh: "菲律宾本土分销代理匹配平台", en: "Philippines domestic distribution and agency matching platform" }, tags: ["分销", "代理"] },
                  { name: "菲律宾商业发展中心", url: "https://www.bdc.gov.ph", desc: { zh: "菲律宾政府商业发展中心，专注中小企业分销对接", en: "Philippines Business Development Center for SME distribution" }, tags: ["官方", "分销", "中小企业"] }
                ]
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
                distribution: [
                  { name: "马来西亚分销代理网络", url: "https://www.malaysiadistribution.my", desc: { zh: "马来西亚本土分销代理匹配平台", en: "Malaysia domestic distribution and agency matching platform" }, tags: ["分销", "代理"] },
                  { name: "大马厂商联盟FMM", url: "https://www.fmm.org.my", desc: { zh: "马来西亚厂商联盟，分销商与代理商资源丰富", en: "Federation of Malaysian Manufacturers for distributors and agents" }, tags: ["分销", "代理", "制造商"] }
                ]
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
                distribution: [
                  { name: "柬埔寨分销代理网络", url: "https://www.cambodiadistribution.kh", desc: { zh: "柬埔寨本土分销代理匹配平台", en: "Cambodia domestic distribution and agency matching platform" }, tags: ["分销", "代理"] },
                  { name: "柬埔寨商会CDC", url: "https://www.cam chrysanthemum.org.kh", desc: { zh: "柬埔寨发展理事会，专注投资与分销对接", en: "Cambodia Development Council for investment and distribution" }, tags: ["官方", "分销", "投资"] }
                ]
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
                distribution: [
                  { name: "缅甸分销代理网络", url: "https://www.myanmardistribution.mm", desc: { zh: "缅甸本土分销代理匹配平台", en: "Myanmar domestic distribution and agency matching platform" }, tags: ["分销", "代理"] },
                  { name: "缅甸工商会UMFCCI", url: "https://www.umfcci.org.mm", desc: { zh: "缅甸联邦工商会，专注商业配对与分销合作", en: "Myanmar Federation of Chambers of Commerce for business matching" }, tags: ["商会", "分销"] }
                ]
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
                distribution: [
                  { name: "老挝分销代理网络", url: "https://www.laosdistribution.la", desc: { zh: "老挝本土分销代理匹配平台", en: "Laos domestic distribution and agency matching platform" }, tags: ["分销", "代理"] },
                  { name: "老挝国家工商会LNCCI", url: "https://www.lnccilaos.org", desc: { zh: "老挝国家工商会，专注商业配对", en: "Laos National Chamber of Commerce for business matching" }, tags: ["商会", "分销"] }
                ]
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
                distribution: [
                  { name: "文莱分销代理网络", url: "https://www.bruneidistribution.bn", desc: { zh: "文莱分销代理匹配平台", en: "Brunei distribution and agency matching platform" }, tags: ["分销", "代理"] },
                  { name: "文莱达鲁萨兰企业局BEDB", url: "https://www.bedb.com.bn", desc: { zh: "文莱企业发展的重要机构，专注商业配对", en: "Brunei Economic Development Board for business development" }, tags: ["官方", "商业配对"] }
                ]
              }
            },
            {
              id: "timor-leste",
              name: { zh: "东帝汶", en: "Timor-Leste" },
              flag: "TL",
              channels: {
                official: [
                  { name: "东帝汶工商部", url: "https://www.mcfp.gov.tl", desc: { zh: "东帝汶政府官方贸易主管部门", en: "Timor-Leste's official commerce ministry" }, tags: ["官方"] },
                  { name: "东帝汶政府采购平台", url: "https://www.aduana.tl", desc: { zh: "东帝汶政府招标采购门户", en: "Timor-Leste's government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Timor-Leste Business Directory", url: "https://www.tlbusiness.tl", desc: { zh: "东帝汶企业名录平台", en: "Timor-Leste business directory" }, tags: ["企业名录"] },
                  { name: "East Timor Trade Portal", url: "https://www.easttimortrade.com", desc: { zh: "东帝汶贸易门户平台", en: "East Timor trade portal" }, tags: ["B2B"] }
                ],
                distribution: [
                  { name: "东帝汶分销代理网络", url: "https://www.tldistribution.tl", desc: { zh: "东帝汶分销代理匹配平台", en: "Timor-Leste distribution and agency matching platform" }, tags: ["分销", "代理"] },
                  { name: "东帝汶工商会CCRTL", url: "https://www.ccrtl.tl", desc: { zh: "东帝汶工商会，专注商业配对", en: "Timor-Leste Chamber of Commerce for business matching" }, tags: ["商会", "商业配对"] }
                ]
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
                distribution: [
                  { name: "巴基斯坦分销代理网络", url: "https://www.pakistandistribution.pk", desc: { zh: "巴基斯坦本土分销代理匹配平台", en: "Pakistan domestic distribution and agency matching platform" }, tags: ["分销", "代理"] },
                  { name: "巴基斯坦商务配对中心", url: "https://www.pakbusinessmatching.gov.pk", desc: { zh: "巴基斯坦官方商务配对平台，专注分销商与代理商对接", en: "Pakistan official business matching platform for distributors and agents" }, tags: ["商务配对", "官方"] }
                ]
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
                distribution: [
                  { name: "孟加拉分销代理网络", url: "https://www.bangladeshistribution.bd", desc: { zh: "孟加拉国本土分销代理匹配平台", en: "Bangladesh domestic distribution and agency matching platform" }, tags: ["分销", "代理"] },
                  { name: "孟加拉国工商会FBCCI", url: "https://www.fbcci.org.bd", desc: { zh: "孟加拉国工商联合会，专注商业配对与分销合作", en: "Bangladesh Federation of Chambers of Commerce for business matching" }, tags: ["商会", "分销"] }
                ]
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
                distribution: [
                  { name: "斯里兰卡分销代理网络", url: "https://www.srilankdistribution.lk", desc: { zh: "斯里兰卡本土分销代理匹配平台", en: "Sri Lanka domestic distribution and agency matching platform" }, tags: ["分销", "代理"] },
                  { name: "斯里兰卡出口发展局商业配对", url: "https://www.srilankabusiness.com/edb", desc: { zh: "斯里兰卡出口发展局官方商业配对服务", en: "Sri Lanka Export Development Board official business matching service" }, tags: ["官方", "商业配对", "出口"] }
                ]
              }
            },
            {
              id: "nepal",
              name: { zh: "尼泊尔", en: "Nepal" },
              flag: "NP",
              channels: {
                official: [
                  { name: "尼泊尔工商部", url: "https://www.doind.gov.np", desc: { zh: "尼泊尔政府官方贸易主管部门", en: "Nepal's official commerce ministry" }, tags: ["官方"] },
                  { name: "尼泊尔工业局", url: "https://www.doind.gov.np", desc: { zh: "尼泊尔官方工业管理部门", en: "Nepal's official industry authority" }, tags: ["官方", "工业"] },
                  { name: "尼泊尔政府采购平台", url: "https://www.boligol.nep", desc: { zh: "尼泊尔政府招标采购门户", en: "Nepal's government procurement portal" }, tags: ["政府采购", "招标"] }
                ],
                b2b: [
                  { name: "Nepal Trade Portal", url: "https://www.nepaltradeportal.gov.np", desc: { zh: "尼泊尔官方贸易门户", en: "Nepal's official trade portal" }, tags: ["B2B", "官方"] },
                  { name: "Nepal Yellow Pages", url: "https://www.nepalyellowpages.com", desc: { zh: "尼泊尔权威企业名录平台", en: "Nepal's authoritative business directory" }, tags: ["企业名录"] },
                  { name: "Nepal B2B", url: "https://www.nepalb2b.com", desc: { zh: "尼泊尔本土B2B平台", en: "Nepal's domestic B2B platform" }, tags: ["B2B", "手工艺", "农业"] }
                ],
                distribution: [
                  { name: "Nepal Distribution Network", url: "https://www.nepaldistribution.np", desc: { zh: "尼泊尔分销代理网络", en: "Nepal distribution network" }, tags: ["分销", "代理"] }
                ]
              }
            },
            {
              id: "bhutan",
              name: { zh: "不丹", en: "Bhutan" },
              flag: "BT",
              channels: {
                official: [
                  { name: "不丹工商部", url: "https://www.moea.gov.bt", desc: { zh: "不丹政府官方贸易主管部门", en: "Bhutan's official commerce ministry" }, tags: ["官方"] },
                  { name: "不丹贸易局", url: "https://www.tpab Bhutan.gov.bt", desc: { zh: "不丹官方贸易促进机构", en: "Bhutan's official trade promotion agency" }, tags: ["官方", "出口"] },
                  { name: "不丹政府采购平台", url: "https://www.purchasing.gov.bt", desc: { zh: "不丹政府招标采购门户", en: "Bhutan's government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Bhutan Trade Directory", url: "https://www.bhutantrade.bt", desc: { zh: "不丹贸易目录平台", en: "Bhutan trade directory" }, tags: ["企业名录"] },
                  { name: "Bhutan Business Portal", url: "https://www.bhutanbusinessportal.bt", desc: { zh: "不丹商业门户", en: "Bhutan business portal" }, tags: ["企业名录"] }
                ],
                distribution: [
                  { name: "不丹分销代理网络", url: "https://www.bhutandistribution.bt", desc: { zh: "不丹分销代理匹配平台", en: "Bhutan distribution and agency matching platform" }, tags: ["分销", "代理"] },
                  { name: "不丹工商部商业发展中心", url: "https://www.moea.gov.bt/bdc", desc: { zh: "不丹工商部商业发展中心", en: "Bhutan Ministry of Economic Affairs Business Development Center" }, tags: ["官方", "商业发展"] }
                ]
              }
            },
            {
              id: "maldives",
              name: { zh: "马尔代夫", en: "Maldives" },
              flag: "MV",
              channels: {
                official: [
                  { name: "马尔代夫经济发展部", url: "https://www.trade.gov.mv", desc: { zh: "马尔代夫政府官方贸易主管部门", en: "Maldives' official economic development ministry" }, tags: ["官方"] },
                  { name: "马尔代夫旅游局", url: "https://www.tourism.gov.mv", desc: { zh: "马尔代夫官方旅游贸易促进机构", en: "Maldives' official tourism authority" }, tags: ["官方", "旅游"] },
                  { name: "马尔代夫政府采购平台", url: "https://www.procurement.gov.mv", desc: { zh: "马尔代夫政府招标采购门户", en: "Maldives' government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Maldives Yellow Pages", url: "https://www.maldivesyellowpages.com", desc: { zh: "马尔代夫权威企业名录平台", en: "Maldives' authoritative business directory" }, tags: ["企业名录"] },
                  { name: "Maldives Business Directory", url: "https://www.maldivesbusiness.mv", desc: { zh: "马尔代夫商业名录平台", en: "Maldives business directory" }, tags: ["企业名录"] },
                  { name: "Maldives Trade Online", url: "https://www.maltradonline.gov.mv", desc: { zh: "马尔代夫官方贸易平台", en: "Maldives official trade platform" }, tags: ["B2B", "官方"] }
                ],
                distribution: [
                  { name: "马尔代夫分销代理网络", url: "https://www.maldivesdistribution.mv", desc: { zh: "马尔代夫分销代理匹配平台", en: "Maldives distribution and agency matching platform" }, tags: ["分销", "代理"] },
                  { name: "马尔代夫经济发展局MEDC", url: "https://www.medc.gov.mv", desc: { zh: "马尔代夫经济发展局，专注商业发展与配对", en: "Maldives Economic Development Corporation for business development" }, tags: ["官方", "商业发展"] }
                ]
              }
            },
            {
              id: "afghanistan",
              name: { zh: "阿富汗", en: "Afghanistan" },
              flag: "AF",
              channels: {
                official: [
                  { name: "阿富汗工商部", url: "https://www.moe.gov.af", desc: { zh: "阿富汗政府官方贸易主管部门（局势影响部分功能）", en: "Afghanistan's official commerce ministry (limited access due to situation)" }, tags: ["官方"] },
                  { name: "阿富汗政府采购平台", url: "https://www.nationalprocurement.gov.af", desc: { zh: "阿富汗政府招标采购门户", en: "Afghanistan's government procurement portal" }, tags: ["政府采购"] },
                  { name: "阿富汗商会", url: "https://www.acci.org.af", desc: { zh: "阿富汗全国性商会组织", en: "Afghanistan chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "Afghanistan Trade Portal", url: "https://www.afghanistantradeportal.com", desc: { zh: "阿富汗贸易门户平台", en: "Afghanistan trade portal (limited access)" }, tags: ["B2B"] },
                  { name: "Afghan B2B Directory", url: "https://www.afghanb2b.com", desc: { zh: "阿富汗B2B企业名录", en: "Afghan B2B directory (limited access)" }, tags: ["企业名录"] }
                ],
                distribution: [
                  { name: "阿富汗分销代理网络", url: "https://www.afghanistribution.af", desc: { zh: "阿富汗分销代理匹配平台（受限）", en: "Afghanistan distribution network (limited access)" }, tags: ["分销", "代理"] },
                  { name: "阿富汗工商会ACCI", url: "https://www.acci.org.af", desc: { zh: "阿富汗工商会，专注商业配对", en: "Afghanistan Chamber of Commerce for business matching" }, tags: ["商会", "商业配对"] }
                ]
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
                distribution: [
                  { name: "阿联酋分销代理网络", url: "https://www.uaedistribution.ae", desc: { zh: "阿联酋本土分销代理匹配平台，覆盖中东区域", en: "UAE domestic distribution and agency matching platform covering Middle East" }, tags: ["分销", "代理", "中东"] },
                  { name: "迪拜分销商联盟", url: "https://www.dubaidistributors.ae", desc: { zh: "迪拜分销商联盟，专注零售与批发渠道对接", en: "Dubai Distributors Alliance for retail and wholesale channel matching" }, tags: ["分销", "批发", "迪拜"] }
                ]
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
                distribution: [
                  { name: "沙特分销代理网络", url: "https://www.saudidistribution.sa", desc: { zh: "沙特阿拉伯分销代理匹配平台", en: "Saudi Arabia distribution and agency matching platform" }, tags: ["分销", "代理"] },
                  { name: "沙特商务配对中心", url: "https://www.saudibusinessmatching.gov.sa", desc: { zh: "沙特官方商务配对平台，专注分销商与代理商对接", en: "Saudi official business matching platform for distributors and agents" }, tags: ["商务配对", "官方"] }
                ]
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
                distribution: [
                  { name: "土耳其分销代理网络", url: "https://www.turkeydistribution.com.tr", desc: { zh: "土耳其本土分销代理匹配平台", en: "Turkey domestic distribution and agency matching platform" }, tags: ["分销", "代理"] },
                  { name: "土耳其出口商协会商务配对", url: "https://www.tib.org.tr", desc: { zh: "土耳其出口商协会官方商务配对服务", en: "Turkish Exporters Association official business matching service" }, tags: ["官方", "商务配对", "出口"] }
                ]
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
                distribution: [
                  { name: "卡塔尔分销代理网络", url: "https://www.qatardistribution.qa", desc: { zh: "卡塔尔分销代理匹配平台", en: "Qatar distribution and agency matching platform" }, tags: ["分销", "代理"] },
                  { name: "卡塔尔商会商务配对", url: "https://www.qcci.org.qa/bm", desc: { zh: "卡塔尔商会官方商务配对服务", en: "Qatar Chamber of Commerce official business matching service" }, tags: ["商会", "商务配对"] }
                ]
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
                distribution: [
                  { name: "科威特分销代理网络", url: "https://www.kuwaitdistribution.kw", desc: { zh: "科威特分销代理匹配平台", en: "Kuwait distribution and agency matching platform" }, tags: ["分销", "代理"] },
                  { name: "科威特工商会商务配对", url: "https://www.kcci.org.kw", desc: { zh: "科威特工商会商务配对服务", en: "Kuwait Chamber of Commerce business matching service" }, tags: ["商会", "商务配对"] }
                ]
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
                distribution: [
                  { name: "阿曼分销代理网络", url: "https://www.omandistribution.om", desc: { zh: "阿曼分销代理匹配平台", en: "Oman distribution and agency matching platform" }, tags: ["分销", "代理"] },
                  { name: "阿曼工商会商务配对", url: "https://www.omanchamber.gov.om/bm", desc: { zh: "阿曼工商会官方商务配对服务", en: "Oman Chamber of Commerce official business matching service" }, tags: ["商会", "商务配对"] }
                ]
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
                distribution: [
                  { name: "巴林分销代理网络", url: "https://www.bahraindistribution.bh", desc: { zh: "巴林分销代理匹配平台", en: "Bahrain distribution and agency matching platform" }, tags: ["分销", "代理"] },
                  { name: "巴林工商会BCCI", url: "https://www.bahrainchamber.bh", desc: { zh: "巴林工商会，专注商业配对", en: "Bahrain Chamber of Commerce for business matching" }, tags: ["商会", "商业配对"] }
                ]
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
                distribution: [
                  { name: "伊朗分销代理网络", url: "https://www.irandistribution.ir", desc: { zh: "伊朗分销代理匹配平台", en: "Iran distribution and agency matching platform" }, tags: ["分销", "代理"] },
                  { name: "伊朗工商会商务配对", url: "https://www.iranianchamber.com/bm", desc: { zh: "伊朗工商会商务配对服务", en: "Iran Chamber of Commerce business matching service" }, tags: ["商会", "商务配对"] }
                ]
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
                distribution: [
                  { name: "以色列分销代理网络", url: "https://www.israeldistribution.co.il", desc: { zh: "以色列分销代理匹配平台", en: "Israel distribution and agency matching platform" }, tags: ["分销", "代理"] },
                  { name: "以色列出口研究所商务配对", url: "https://www.exportisrael.com", desc: { zh: "以色列出口研究所官方商务配对服务", en: "Israel Export Institute official business matching service" }, tags: ["官方", "商务配对", "出口"] }
                ]
              }
            },
            {
              id: "iraq",
              name: { zh: "伊拉克", en: "Iraq" },
              flag: "IQ",
              channels: {
                official: [
                  { name: "伊拉克贸易部", url: "https://www.mot.gov.iq", desc: { zh: "伊拉克政府官方贸易主管部门", en: "Iraq's official trade ministry" }, tags: ["官方", "贸易"] },
                  { name: "伊拉克政府采购平台", url: "https://www.gpp.gov.iq", desc: { zh: "伊拉克政府招标采购门户", en: "Iraq's official government procurement portal" }, tags: ["政府采购", "招标"] }
                ],
                b2b: [
                  { name: "Iraq Business Directory", url: "https://www.iraqbusinessdirectory.com", desc: { zh: "伊拉克企业名录平台", en: "Iraq business directory platform" }, tags: ["企业名录"] },
                  { name: "Iraq Yellow Pages", url: "https://www.iraqyellowpages.com", desc: { zh: "伊拉克黄页平台", en: "Iraq yellow pages" }, tags: ["企业名录"] }
                ],
                distribution: [
                  { name: "Iraq Distribution Network", url: "https://www.iraqdistribution.iq", desc: { zh: "伊拉克分销代理网络", en: "Iraq distribution network" }, tags: ["分销", "代理"] }
                ]
              }
            },
            {
              id: "jordan",
              name: { zh: "约旦", en: "Jordan" },
              flag: "JO",
              channels: {
                official: [
                  { name: "约旦贸易和工业部", url: "https://www.mti.gov.jo", desc: { zh: "约旦政府官方贸易主管部门", en: "Jordan's official trade and industry ministry" }, tags: ["官方"] },
                  { name: "约旦贸易促进局JEDCO", url: "https://www.jedco.gov.jo", desc: { zh: "约旦政府官方贸易促进机构", en: "Jordan's official trade promotion agency" }, tags: ["官方", "贸易促进"] },
                  { name: "约旦政府采购平台", url: "https://www.gpp.gov.jo", desc: { zh: "约旦政府招标采购门户", en: "Jordan's official government procurement portal" }, tags: ["政府采购", "招标"] }
                ],
                b2b: [
                  { name: "Jordan Yellow Pages", url: "https://www.jordanyellowpages.com", desc: { zh: "约旦权威企业名录平台", en: "Jordan's authoritative business directory" }, tags: ["企业名录"] },
                  { name: "Amman Business Directory", url: "https://www.ammandirectory.jo", desc: { zh: "安曼企业名录", en: "Amman business directory" }, tags: ["企业名录"] },
                  { name: "Jordan B2B", url: "https://www.jordanb2b.jo", desc: { zh: "约旦本土B2B平台", en: "Jordan's domestic B2B platform" }, tags: ["B2B", "化工", "服装"] }
                ],
                distribution: [
                  { name: "Jordan Distribution Network", url: "https://www.jordandistribution.jo", desc: { zh: "约旦分销代理网络", en: "Jordan distribution network" }, tags: ["分销", "代理"] }
                ]
              }
            },
            {
              id: "lebanon",
              name: { zh: "黎巴嫩", en: "Lebanon" },
              flag: "LB",
              channels: {
                official: [
                  { name: "黎巴嫩经贸部", url: "https://www.economy.gov.lb", desc: { zh: "黎巴嫩政府官方贸易主管部门", en: "Lebanon's official economy ministry" }, tags: ["官方", "贸易"] },
                  { name: "黎巴嫩商会CCI", url: "https://www.cci.org.lb", desc: { zh: "黎巴嫩全国性商会组织", en: "Lebanon's national chamber of commerce" }, tags: ["商会"] },
                  { name: "黎巴嫩政府采购平台", url: "https://www.purchasing.gov.lb", desc: { zh: "黎巴嫩政府招标采购门户", en: "Lebanon's official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Lebanon Yellow Pages", url: "https://www.yellowpages.com.lb", desc: { zh: "黎巴嫩权威企业名录平台", en: "Lebanon's authoritative business directory" }, tags: ["企业名录"] },
                  { name: "Lebanon Business Directory", url: "https://www.lebanonbusiness.net", desc: { zh: "黎巴嫩商业名录平台", en: "Lebanon business directory" }, tags: ["企业名录"] },
                  { name: "Lebanon B2B", url: "https://www.lebanonb2b.com", desc: { zh: "黎巴嫩本土B2B平台", en: "Lebanon's domestic B2B platform" }, tags: ["B2B", "旅游", "食品"] }
                ],
                distribution: [
                  { name: "黎巴嫩分销代理网络", url: "https://www.lebanondistribution.com.lb", desc: { zh: "黎巴嫩分销代理匹配平台", en: "Lebanon distribution and agency matching platform" }, tags: ["分销", "代理"] },
                  { name: "黎巴嫩商会CCI", url: "https://www.cci.org.lb/bm", desc: { zh: "黎巴嫩商会商务配对服务", en: "Lebanon Chamber of Commerce business matching service" }, tags: ["商会", "商务配对"] }
                ]
              }
            },
            {
              id: "syria",
              name: { zh: "叙利亚", en: "Syria" },
              flag: "SY",
              channels: {
                official: [
                  { name: "叙利亚贸易和资源部", url: "https://www.mtdsr.gov.sy", desc: { zh: "叙利亚政府官方贸易主管部门（部分受制裁影响）", en: "Syria's official trade ministry (partially affected by sanctions)" }, tags: ["官方", "贸易"] },
                  { name: "叙利亚工商会", url: "https://www.sccci.org.sy", desc: { zh: "叙利亚全国性商会组织", en: "Syria's national chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "Syria Trade Directory", url: "https://www.syriatrade.sy", desc: { zh: "叙利亚贸易目录平台", en: "Syria trade directory (limited access)" }, tags: ["企业名录"] },
                  { name: "Syrian Business Portal", url: "https://www.syrianbusinessportal.com", desc: { zh: "叙利亚商业门户", en: "Syrian business portal (limited access)" }, tags: ["企业名录"] }
                ],
                distribution: []
              }
            },
            {
              id: "yemen",
              name: { zh: "也门", en: "Yemen" },
              flag: "YE",
              channels: {
                official: [
                  { name: "也门贸易和工业部", url: "https://www.moti.gov.ye", desc: { zh: "也门政府官方贸易主管部门（局势动荡中）", en: "Yemen's official trade ministry (situation volatile)" }, tags: ["官方"] },
                  { name: "也门政府采购平台", url: "https://www.yemen-procurement.gov.ye", desc: { zh: "也门政府招标采购门户", en: "Yemen's government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Yemen Business Directory", url: "https://www.yemenbusiness.net", desc: { zh: "也门企业名录平台", en: "Yemen business directory" }, tags: ["企业名录"] },
                  { name: "Yemen Trade Portal", url: "https://www.yementrade.com", desc: { zh: "也门贸易门户", en: "Yemen trade portal" }, tags: ["贸易"] }
                ],
                distribution: [
                  { name: "也门分销代理网络", url: "https://www.yemendistribution.ye", desc: { zh: "也门分销代理匹配平台（局势动荡）", en: "Yemen distribution and agency matching platform (volatile situation)" }, tags: ["分销", "代理"] },
                  { name: "也门商会YC", url: "https://www.yemenchamber.org.ye", desc: { zh: "也门商会，专注商业配对", en: "Yemen Chamber of Commerce for business matching" }, tags: ["商会", "商业配对"] }
                ]
              }
            },
            {
              id: "cyprus",
              name: { zh: "塞浦路斯", en: "Cyprus" },
              flag: "CY",
              channels: {
                official: [
                  { name: "塞浦路斯工商部", url: "https://www.mcit.gov.cy", desc: { zh: "塞浦路斯政府官方贸易主管部门", en: "Cyprus's official commerce ministry" }, tags: ["官方"] },
                  { name: "塞浦路斯政府采购平台", url: "https://www.eprocurement.gov.cy", desc: { zh: "塞浦路斯政府招标采购门户", en: "Cyprus's official government procurement portal" }, tags: ["政府采购", "招标"] },
                  { name: "塞浦路斯商会CCCI", url: "https://www.ccci.org.cy", desc: { zh: "塞浦路斯全国性商会组织", en: "Cyprus's national chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "Cyprus Yellow Pages", url: "https://www.yellowpages.com.cy", desc: { zh: "塞浦路斯权威企业名录平台", en: "Cyprus's authoritative business directory" }, tags: ["企业名录"] },
                  { name: "Cyprus Business Directory", url: "https://www.cyprusbusiness.com", desc: { zh: "塞浦路斯商业名录平台", en: "Cyprus business directory" }, tags: ["企业名录"] },
                  { name: "Kompass Cyprus", url: "https://cy.kompass.com", desc: { zh: "全球B2B平台塞浦路斯分站", en: "Global B2B platform's Cyprus division" }, tags: ["B2B", "工业"] }
                ],
                distribution: [
                  { name: "Cyprus Distribution Network", url: "https://www.cyprusdistribution.cy", desc: { zh: "塞浦路斯分销代理网络", en: "Cyprus distribution network" }, tags: ["分销", "代理"] }
                ]
              }
            },
            {
              id: "georgia",
              name: { zh: "格鲁吉亚", en: "Georgia" },
              flag: "GE",
              channels: {
                official: [
                  { name: "格鲁吉亚经济部", url: "https://www.economy.ge", desc: { zh: "格鲁吉亚政府官方经济主管部门", en: "Georgia's official economy ministry" }, tags: ["官方"] },
                  { name: "Enterprise Georgia", url: "https://www.enterprisegeorgia.gov.ge", desc: { zh: "格鲁吉亚政府官方贸易促进机构", en: "Georgia's official trade promotion agency" }, tags: ["官方", "贸易促进"] },
                  { name: "格鲁吉亚政府采购平台", url: "https://www.procurement.gov.ge", desc: { zh: "格鲁吉亚政府招标采购门户", en: "Georgia's official government procurement portal" }, tags: ["政府采购", "招标"] }
                ],
                b2b: [
                  { name: "Georgia Yellow Pages", url: "https://www.georgiayp.com", desc: { zh: "格鲁吉亚权威企业名录平台", en: "Georgia's authoritative business directory" }, tags: ["企业名录"] },
                  { name: "Trade with Georgia", url: "https://www.tradewithgeorgia.ge", desc: { zh: "格鲁吉亚贸易对接平台", en: "Georgia trade platform" }, tags: ["贸易"] },
                  { name: "Georgian B2B", url: "https://www.georgianb2b.ge", desc: { zh: "格鲁吉亚本土B2B平台", en: "Georgia's domestic B2B platform" }, tags: ["B2B", "红酒", "农业"] }
                ],
                distribution: [
                  { name: "Georgia Distribution Network", url: "https://www.georgiadistribution.ge", desc: { zh: "格鲁吉亚分销代理网络", en: "Georgia distribution network" }, tags: ["分销", "代理"] }
                ]
              }
            },
            {
              id: "armenia",
              name: { zh: "亚美尼亚", en: "Armenia" },
              flag: "AM",
              channels: {
                official: [
                  { name: "亚美尼亚经贸部", url: "https://www.mineconomy.am", desc: { zh: "亚美尼亚政府官方贸易主管部门", en: "Armenia's official trade ministry" }, tags: ["官方"] },
                  { name: "亚美尼亚贸易促进局", url: "https://www.exportarmenia.am", desc: { zh: "亚美尼亚官方贸易促进机构", en: "Armenia's official trade promotion agency" }, tags: ["官方", "出口"] },
                  { name: "亚美尼亚政府采购平台", url: "https://www.procurement.am", desc: { zh: "亚美尼亚政府招标采购门户", en: "Armenia's official government procurement portal" }, tags: ["政府采购", "招标"] }
                ],
                b2b: [
                  { name: "Armenian Business Directory", url: "https://www.armenianbusiness.am", desc: { zh: "亚美尼亚企业名录平台", en: "Armenian business directory" }, tags: ["企业名录"] },
                  { name: "Armenia Trade Portal", url: "https://www.armtrading.am", desc: { zh: "亚美尼亚贸易门户", en: "Armenia trade portal" }, tags: ["贸易"] },
                  { name: "B2B Armenia", url: "https://www.b2barmenia.am", desc: { zh: "亚美尼亚本土B2B平台", en: "Armenia's domestic B2B platform" }, tags: ["B2B", "葡萄酒", "农业"] }
                ],
                distribution: [
                  { name: "亚美尼亚分销代理网络", url: "https://www.armdistribution.am", desc: { zh: "亚美尼亚分销代理匹配平台", en: "Armenia distribution and agency matching platform" }, tags: ["分销", "代理"] },
                  { name: "亚美尼亚贸易促进局商务配对", url: "https://www.exportarmenia.am", desc: { zh: "亚美尼亚贸易促进局官方商务配对服务", en: "Armenia Trade Promotion Agency official business matching service" }, tags: ["官方", "商务配对", "出口"] }
                ]
              }
            },
            {
              id: "azerbaijan",
              name: { zh: "阿塞拜疆", en: "Azerbaijan" },
              flag: "AZ",
              channels: {
                official: [
                  { name: "阿塞拜疆经济部", url: "https://www.economy.gov.az", desc: { zh: "阿塞拜疆政府官方经济主管部门", en: "Azerbaijan's official economy ministry" }, tags: ["官方"] },
                  { name: "阿塞拜疆贸易促进局AZPROMO", url: "https://www.azpromo.az", desc: { zh: "阿塞拜疆官方贸易促进机构", en: "Azerbaijan's official trade promotion agency" }, tags: ["官方", "出口"] },
                  { name: "阿塞拜疆政府采购平台", url: "https://www.tender.gov.az", desc: { zh: "阿塞拜疆政府招标采购门户", en: "Azerbaijan's official government procurement portal" }, tags: ["政府采购", "招标"] }
                ],
                b2b: [
                  { name: "Azerbaijan Yellow Pages", url: "https://www.azerbaijanyellowpages.az", desc: { zh: "阿塞拜疆权威企业名录平台", en: "Azerbaijan's authoritative business directory" }, tags: ["企业名录"] },
                  { name: "Baku Business Directory", url: "https://www.bakudirectory.az", desc: { zh: "巴库企业名录", en: "Baku business directory" }, tags: ["企业名录"] },
                  { name: "Azerbaijan B2B", url: "https://www.azb2b.az", desc: { zh: "阿塞拜疆本土B2B平台", en: "Azerbaijan's domestic B2B platform" }, tags: ["B2B", "石油", "农业"] }
                ],
                distribution: [
                  { name: "Azerbaijan Distribution Network", url: "https://www.azdistribution.az", desc: { zh: "阿塞拜疆分销代理网络", en: "Azerbaijan distribution network" }, tags: ["分销", "代理"] }
                ]
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
                distribution: [
                  { name: "哈萨克斯坦分销代理网络", url: "https://www.kazdistribution.kz", desc: { zh: "哈萨克斯坦分销代理匹配平台", en: "Kazakhstan distribution and agency matching platform" }, tags: ["分销", "代理"] },
                  { name: "哈萨克斯坦国家工商会NCCI", url: "https://www.chamber.kz/bm", desc: { zh: "哈萨克斯坦国家工商会官方商务配对服务", en: "Kazakhstan National Chamber official business matching service" }, tags: ["商会", "商务配对"] }
                ]
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
                distribution: [
                  { name: "乌兹别克斯坦分销代理网络", url: "https://www.uzdistribution.uz", desc: { zh: "乌兹别克斯坦分销代理匹配平台", en: "Uzbekistan distribution and agency matching platform" }, tags: ["分销", "代理"] },
                  { name: "乌兹别克斯坦投资和外贸部商务配对", url: "https://www.mft.uz/bm", desc: { zh: "乌兹别克斯坦投资和外贸部官方商务配对服务", en: "Uzbekistan Ministry of Investment and Foreign Trade official business matching" }, tags: ["官方", "商务配对"] }
                ]
              }
            },
            {
              id: "turkmenistan",
              name: { zh: "土库曼斯坦", en: "Turkmenistan" },
              flag: "TM",
              channels: {
                official: [
                  { name: "土库曼斯坦工商会", url: "https://www.cci.gov.tm", desc: { zh: "土库曼斯坦全国性商会组织", en: "Turkmenistan's national chamber of commerce" }, tags: ["商会", "官方"] },
                  { name: "土库曼斯坦国家商品原料交易所", url: "https://www.statecommodityexchange.gov.tm", desc: { zh: "土库曼斯坦官方商品交易所", en: "Turkmenistan's state commodity exchange" }, tags: ["官方", "贸易"] }
                ],
                b2b: [
                  { name: "Turkmenistan Trade Directory", url: "https://www.turkmenistantrade.com", desc: { zh: "土库曼斯坦贸易目录平台", en: "Turkmenistan trade directory platform" }, tags: ["企业名录", "贸易"] }
                ],
                distribution: [
                  { name: "土库曼斯坦分销代理网络", url: "https://www.tmdistribution.gov.tm", desc: { zh: "土库曼斯坦分销代理匹配平台", en: "Turkmenistan distribution and agency matching platform" }, tags: ["分销", "代理"] },
                  { name: "土库曼斯坦工商会商务配对", url: "https://www.cci.gov.tm", desc: { zh: "土库曼斯坦工商会商务配对服务", en: "Turkmenistan Chamber of Commerce business matching service" }, tags: ["商会", "商务配对"] }
                ]
              }
            },
            {
              id: "kyrgyzstan",
              name: { zh: "吉尔吉斯斯坦", en: "Kyrgyzstan" },
              flag: "KG",
              channels: {
                official: [
                  { name: "吉尔吉斯斯坦经济商务部", url: "https://www.mega.gov.kg", desc: { zh: "吉尔吉斯斯坦政府官方贸易主管部门", en: "Kyrgyzstan's official trade ministry" }, tags: ["官方"] },
                  { name: "吉尔吉斯斯坦工商会CCKR", url: "https://www.cci.kg", desc: { zh: "吉尔吉斯斯坦全国性商会组织", en: "Kyrgyzstan's national chamber of commerce" }, tags: ["商会"] },
                  { name: "吉尔吉斯斯坦政府采购平台", url: "https://www.zakupki.gov.kg", desc: { zh: "吉尔吉斯斯坦政府招标采购门户", en: "Kyrgyzstan's official government procurement portal" }, tags: ["政府采购", "招标"] }
                ],
                b2b: [
                  { name: "Kyrgyz Trade Portal", url: "https://www.kgtrade.kg", desc: { zh: "吉尔吉斯斯坦本土B2B平台", en: "Kyrgyzstan's domestic B2B platform" }, tags: ["B2B", "农业", "纺织"] }
                ],
                distribution: [
                  { name: "吉尔吉斯斯坦分销代理网络", url: "https://www.kgdistribution.kg", desc: { zh: "吉尔吉斯斯坦分销代理匹配平台", en: "Kyrgyzstan distribution and agency matching platform" }, tags: ["分销", "代理"] },
                  { name: "吉尔吉斯斯坦工商会CCKR", url: "https://www.cci.kg/bm", desc: { zh: "吉尔吉斯斯坦工商会官方商务配对服务", en: "Kyrgyzstan Chamber of Commerce official business matching service" }, tags: ["商会", "商务配对"] }
                ]
              }
            },
            {
              id: "tajikistan",
              name: { zh: "塔吉克斯坦", en: "Tajikistan" },
              flag: "TJ",
              channels: {
                official: [
                  { name: "塔吉克斯坦经贸部", url: "https://www.meti.tj", desc: { zh: "塔吉克斯坦政府官方贸易主管部门", en: "Tajikistan's official trade ministry" }, tags: ["官方"] },
                  { name: "塔吉克斯坦工商会CCI", url: "https://www.cci.tj", desc: { zh: "塔吉克斯坦全国性商会组织", en: "Tajikistan's national chamber of commerce" }, tags: ["商会"] },
                  { name: "塔吉克斯坦政府采购平台", url: "https://www.procurement.tj", desc: { zh: "塔吉克斯坦政府招标采购门户", en: "Tajikistan's official government procurement portal" }, tags: ["政府采购", "招标"] }
                ],
                b2b: [
                  { name: "Tajikistan Business Directory", url: "https://www.tjbusiness.tj", desc: { zh: "塔吉克斯坦企业名录平台", en: "Tajikistan business directory" }, tags: ["企业名录"] },
                  { name: "Tajikistan B2B", url: "https://www.tjb2b.tj", desc: { zh: "塔吉克斯坦本土B2B平台", en: "Tajikistan's domestic B2B platform" }, tags: ["B2B", "农业", "铝业"] }
                ],
                distribution: [
                  { name: "塔吉克斯坦分销代理网络", url: "https://www.tjdistribution.tj", desc: { zh: "塔吉克斯坦分销代理匹配平台", en: "Tajikistan distribution and agency matching platform" }, tags: ["分销", "代理"] },
                  { name: "塔吉克斯坦工商会CCI", url: "https://www.cci.tj/bm", desc: { zh: "塔吉克斯坦工商会商务配对服务", en: "Tajikistan Chamber of Commerce business matching service" }, tags: ["商会", "商务配对"] }
                ]
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
                distribution: [
                  { name: "Belgium Distribution Network", url: "https://www.distribution-belgium.be", desc: { zh: "比利时分销代理匹配平台", en: "Belgium distribution and agency matching platform" }, tags: ["分销", "代理"] }
                ]
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
                distribution: [
                  { name: "Switzerland Distribution Network", url: "https://www.distribution-switzerland.ch", desc: { zh: "瑞士分销代理匹配平台", en: "Switzerland distribution and agency matching platform" }, tags: ["分销", "代理"] }
                ]
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
                distribution: [
                  { name: "Austria Distribution Network", url: "https://www.distribution-austria.at", desc: { zh: "奥地利分销代理匹配平台", en: "Austria distribution and agency matching platform" }, tags: ["分销", "代理"] }
                ]
              }
            },
            {
              id: "ireland",
              name: { zh: "爱尔兰", en: "Ireland" },
              flag: "IE",
              channels: {
                official: [
                  { name: "爱尔兰企业局Enterprise Ireland", url: "https://www.enterprise-ireland.com", desc: { zh: "爱尔兰政府直属贸易促进机构，专注支持爱尔兰企业国际化及海外采购对接", en: "Irish government trade agency supporting enterprise internationalization and buyer connections" }, tags: ["官方", "贸易促进", "采购商匹配"] },
                  { name: "爱尔兰政府商贸网", url: "https://www.tradewithireland.com", desc: { zh: "爱尔兰官方B2B商贸门户，连接爱尔兰采购商与全球供应商", en: "Ireland's official B2B trade portal connecting Irish buyers with global suppliers" }, tags: ["官方", "B2B"] },
                  { name: "爱尔兰政府采购平台eTenders", url: "https://www.etenders.gov.ie", desc: { zh: "爱尔兰政府官方招标采购门户", en: "Ireland's official government e-procurement tender portal" }, tags: ["政府采购", "招标"] }
                ],
                b2b: [
                  { name: "Irish Trade Board", url: "https://www.irishtradeboard.ie", desc: { zh: "爱尔兰官方贸易对接平台", en: "Ireland's official trade matching platform" }, tags: ["B2B", "贸易对接"] },
                  { name: "Kompass Ireland", url: "https://ie.kompass.com", desc: { zh: "全球知名B2B数据库爱尔兰分站", en: "Global B2B database's Irish division" }, tags: ["B2B", "数据库", "企业名录"] },
                  { name: "Ireland Yellow Pages", url: "https://www.goldenpages.ie", desc: { zh: "爱尔兰最大企业黄页平台", en: "Ireland's largest business directory" }, tags: ["企业名录", "全品类"] },
                  { name: "Enterprise Europe Network Ireland", url: "https://een.ec.europa.eu", desc: { zh: "欧盟EEN爱尔兰分网络", en: "EU Enterprise Europe Network Ireland branch" }, tags: ["欧盟", "企业对接", "中小企业"] }
                ],
                distribution: [
                  { name: "Ireland Distribution Network", url: "https://www.irelanddistributionnetwork.ie", desc: { zh: "爱尔兰本土分销代理匹配平台", en: "Ireland's domestic distribution and agency matching platform" }, tags: ["分销", "代理", "爱尔兰"] },
                  { name: "Irish Agent & Distributor Finder", url: "https://www.irishtrade.ie", desc: { zh: "爱尔兰代理与分销商查找平台", en: "Irish agent and distributor finder platform" }, tags: ["代理", "分销", "爱尔兰"] }
                ]
              }
            },
            {
              id: "luxembourg",
              name: { zh: "卢森堡", en: "Luxembourg" },
              flag: "LU",
              channels: {
                official: [
                  { name: "卢森堡商会CCIL", url: "https://www.ccil.lu", desc: { zh: "卢森堡全国性商会组织", en: "Luxembourg's national chamber of commerce" }, tags: ["商会"] },
                  { name: "卢森堡贸易投资促进局Luxembourg for Business", url: "https://www.luxembourgforbusiness.com", desc: { zh: "卢森堡政府官方贸易投资促进机构", en: "Luxembourg's official trade and investment promotion agency" }, tags: ["官方", "贸易促进"] },
                  { name: "卢森堡政府采购平台", url: "https://www.mt.public.lu", desc: { zh: "卢森堡政府官方采购门户", en: "Luxembourg's official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Luxembourg Business Directory", url: "https://www.luxembourgbusinessdirectory.lu", desc: { zh: "卢森堡权威企业名录平台", en: "Luxembourg's authoritative business directory" }, tags: ["企业名录", "B2B"] },
                  { name: "Kompass Luxembourg", url: "https://lu.kompass.com", desc: { zh: "全球知名B2B数据库卢森堡分站", en: "Global B2B database's Luxembourg division" }, tags: ["B2B", "数据库"] },
                  { name: "Luxembourg Trade Portal", url: "https://www.luxtradepartners.lu", desc: { zh: "卢森堡贸易门户平台", en: "Luxembourg trade portal platform" }, tags: ["B2B", "贸易"] }
                ],
                distribution: [
                  { name: "Luxembourg Distribution Network", url: "https://www.distribution-luxembourg.lu", desc: { zh: "卢森堡分销代理匹配平台", en: "Luxembourg distribution and agency matching platform" }, tags: ["分销", "代理"] }
                ]
              }
            },
            {
              id: "liechtenstein",
              name: { zh: "列支敦士登", en: "Liechtenstein" },
              flag: "LI",
              channels: {
                official: [
                  { name: "列支敦士登工商会LK", url: "https://www.liechtenstein-industry.li", desc: { zh: "列支敦士登工商会组织", en: "Liechtenstein Industry and Commerce chamber" }, tags: ["商会"] },
                  { name: "列支敦士登政府官网", url: "https://www.admin.li", desc: { zh: "列支敦士登政府官方网站", en: "Official website of the Liechtenstein government" }, tags: ["政府"] }
                ],
                b2b: [
                  { name: "Liechtenstein Business Directory", url: "https://www.liechtenstein-business.li", desc: { zh: "列支敦士登企业名录平台", en: "Liechtenstein business directory platform" }, tags: ["企业名录", "B2B"] },
                  { name: "Alpine Business Portal", url: "https://www.alpinebusinessportal.ch", desc: { zh: "阿尔卑斯地区商业门户，覆盖列支敦士登市场", en: "Alpine region business portal covering Liechtenstein market" }, tags: ["B2B", "阿尔卑斯"] }
                ],
                distribution: [
                  { name: "Liechtenstein Distribution Network", url: "https://www.distribution-liechtenstein.li", desc: { zh: "列支敦士登分销代理匹配平台", en: "Liechtenstein distribution and agency matching platform" }, tags: ["分销", "代理"] }
                ]
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
                distribution: [
                  { name: "Portugal Distribution Network", url: "https://www.distribution-portugal.pt", desc: { zh: "葡萄牙分销代理匹配平台", en: "Portugal distribution and agency matching platform" }, tags: ["分销", "代理"] }
                ]
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
                distribution: [
                  { name: "Greece Distribution Network", url: "https://www.distribution-greece.gr", desc: { zh: "希腊分销代理匹配平台", en: "Greece distribution and agency matching platform" }, tags: ["分销", "代理"] }
                ]
              }
            },
            {
              id: "slovenia",
              name: { zh: "斯洛文尼亚", en: "Slovenia" },
              flag: "SI",
              channels: {
                official: [
                  { name: "斯洛文尼亚企业局SPIRIT", url: "https://www.spiritslovenia.si", desc: { zh: "斯洛文尼亚政府官方贸易投资促进机构", en: "Slovenia's official trade and investment agency" }, tags: ["官方"] },
                  { name: "斯洛文尼亚工商会GZS", url: "https://www.gzs.si", desc: { zh: "斯洛文尼亚全国性商会组织", en: "Slovenia's national chamber of commerce" }, tags: ["商会"] },
                  { name: "斯洛文尼亚政府采购平台", url: "https://www.enarjenje.gov.si", desc: { zh: "斯洛文尼亚政府官方招标采购门户", en: "Slovenia's official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Slovenia Yellow Pages", url: "https://www.islip.vniup.net", desc: { zh: "斯洛文尼亚企业黄页平台", en: "Slovenia business yellow pages" }, tags: ["企业名录"] },
                  { name: "Slovenian B2B Portal", url: "https://www.sloveniab2b.si", desc: { zh: "斯洛文尼亚本土B2B平台", en: "Slovenia's domestic B2B platform" }, tags: ["B2B"] },
                  { name: "Kompass Slovenia", url: "https://si.kompass.com", desc: { zh: "全球知名B2B数据库斯洛文尼亚分站", en: "Global B2B database's Slovenia division" }, tags: ["B2B", "数据库"] }
                ],
                distribution: [
                  { name: "Slovenia Distribution Network", url: "https://www.distribution-slovenia.si", desc: { zh: "斯洛文尼亚分销代理匹配平台", en: "Slovenia distribution and agency matching platform" }, tags: ["分销", "代理"] }
                ]
              }
            },
            {
              id: "croatia",
              name: { zh: "克罗地亚", en: "Croatia" },
              flag: "HR",
              channels: {
                official: [
                  { name: "克罗地亚商会HGK", url: "https://www.hgk.hr", desc: { zh: "克罗地亚全国性商会组织", en: "Croatia's national chamber of commerce" }, tags: ["商会"] },
                  { name: "克罗地亚贸易投资促进局AGRI", url: "https://www.agricroatia.hr", desc: { zh: "克罗地亚政府贸易投资促进机构", en: "Croatia's trade and investment promotion agency" }, tags: ["官方"] },
                  { name: "克罗地亚政府采购平台", url: "https://www.njegos.hr", desc: { zh: "克罗地亚政府官方招标采购门户", en: "Croatia's official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Croatia Yellow Pages", url: "https://www.croatianyellowpages.hr", desc: { zh: "克罗地亚企业黄页平台", en: "Croatia business yellow pages" }, tags: ["企业名录"] },
                  { name: "Croatian B2B Portal", url: "https://www.croatia-b2b.com", desc: { zh: "克罗地亚本土B2B平台", en: "Croatia's domestic B2B platform" }, tags: ["B2B"] },
                  { name: "Adriatic Trade Directory", url: "https://www.adriatictrade.hr", desc: { zh: "亚得里亚海地区贸易目录平台", en: "Adriatic region trade directory platform" }, tags: ["B2B", "亚得里亚海"] }
                ],
                distribution: [
                  { name: "Croatia Distribution Network", url: "https://www.distribution-croatia.hr", desc: { zh: "克罗地亚分销代理匹配平台", en: "Croatia distribution and agency matching platform" }, tags: ["分销", "代理"] }
                ]
              }
            },
            {
              id: "serbia",
              name: { zh: "塞尔维亚", en: "Serbia" },
              flag: "RS",
              channels: {
                official: [
                  { name: "塞尔维亚商会PKS", url: "https://www.pks.rs", desc: { zh: "塞尔维亚全国性商会组织", en: "Serbia's national chamber of commerce" }, tags: ["商会"] },
                  { name: "塞尔维亚贸易促进局RAS", url: "https://www.ras.gov.rs", desc: { zh: "塞尔维亚政府官方贸易促进机构", en: "Serbia's official trade promotion agency" }, tags: ["官方"] },
                  { name: "塞尔维亚政府采购平台", url: "https://www.ujn.gov.rs", desc: { zh: "塞尔维亚政府官方招标采购门户", en: "Serbia's official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Serbia Yellow Pages", url: "https://www.serbiayellowpages.rs", desc: { zh: "塞尔维亚企业黄页平台", en: "Serbia business yellow pages" }, tags: ["企业名录"] },
                  { name: "Serbian B2B Portal", url: "https://www.serbianb2b.rs", desc: { zh: "塞尔维亚本土B2B平台", en: "Serbia's domestic B2B platform" }, tags: ["B2B"] },
                  { name: "Belgrade Business Directory", url: "https://www.beogradbacka.net", desc: { zh: "贝尔格莱德商业目录平台", en: "Belgrade business directory platform" }, tags: ["企业名录", "B2B"] }
                ],
                distribution: [
                  { name: "Serbia Distribution Network", url: "https://www.distribution-serbia.rs", desc: { zh: "塞尔维亚分销代理匹配平台", en: "Serbia distribution and agency matching platform" }, tags: ["分销", "代理"] }
                ]
              }
            },
            {
              id: "bosnia",
              name: { zh: "波黑", en: "Bosnia and Herzegovina" },
              flag: "BA",
              channels: {
                official: [
                  { name: "波黑对外贸易和经济关系部", url: "https://www.mvteo.gov.ba", desc: { zh: "波黑政府官方贸易经济主管部门", en: "Bosnia's official foreign trade and economic relations ministry" }, tags: ["官方"] },
                  { name: "波黑商会", url: "https://www.komorabih.ba", desc: { zh: "波黑全国性商会组织", en: "Bosnia's national chamber of commerce" }, tags: ["商会"] },
                  { name: "波黑政府采购平台", url: "https://www.javnenabavke.gov.ba", desc: { zh: "波黑政府官方招标采购门户", en: "Bosnia's official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Bosnia Yellow Pages", url: "https://www.bosniayellowpages.ba", desc: { zh: "波黑企业黄页平台", en: "Bosnia business yellow pages" }, tags: ["企业名录"] },
                  { name: "Bosnian B2B Portal", url: "https://www.bosnianb2b.ba", desc: { zh: "波黑本土B2B平台", en: "Bosnia's domestic B2B platform" }, tags: ["B2B"] },
                  { name: "BH Trade Directory", url: "https://www.bhtrade.ba", desc: { zh: "波黑贸易目录平台", en: "BH trade directory platform" }, tags: ["B2B", "贸易"] }
                ],
                distribution: [
                  { name: "Bosnia Distribution Network", url: "https://www.distribution-bosnia.ba", desc: { zh: "波黑分销代理匹配平台", en: "Bosnia distribution and agency matching platform" }, tags: ["分销", "代理"] }
                ]
              }
            },
            {
              id: "montenegro",
              name: { zh: "黑山", en: "Montenegro" },
              flag: "ME",
              channels: {
                official: [
                  { name: "黑山经济部", url: "https://www.gov.me/en/economy", desc: { zh: "黑山政府经济主管部门", en: "Montenegro's official economic ministry" }, tags: ["官方"] },
                  { name: "黑山商会PKCG", url: "https://www.privrednakomora.me", desc: { zh: "黑山全国性商会组织", en: "Montenegro's national chamber of commerce" }, tags: ["商会"] },
                  { name: "黑山政府采购平台", url: "https://www.ujn.gov.me", desc: { zh: "黑山政府官方招标采购门户", en: "Montenegro's official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Montenegro Yellow Pages", url: "https://www.montenegroyp.me", desc: { zh: "黑山企业黄页平台", en: "Montenegro business yellow pages" }, tags: ["企业名录"] },
                  { name: "Montenegrin B2B Portal", url: "https://www.montenegro-b2b.me", desc: { zh: "黑山本土B2B平台", en: "Montenegro's domestic B2B platform" }, tags: ["B2B"] }
                ],
                distribution: [
                  { name: "Montenegro Distribution Network", url: "https://www.distribution-montenegro.me", desc: { zh: "黑山分销代理匹配平台", en: "Montenegro distribution and agency matching platform" }, tags: ["分销", "代理"] }
                ]
              }
            },
            {
              id: "north-macedonia",
              name: { zh: "北马其顿", en: "North Macedonia" },
              flag: "MK",
              channels: {
                official: [
                  { name: "北马其顿经济部", url: "https://www.economy.gov.mk", desc: { zh: "北马其顿政府经济主管部门", en: "North Macedonia's official economic ministry" }, tags: ["官方"] },
                  { name: "北马其顿工商会CHMK", url: "https://www.mchamber.mk", desc: { zh: "北马其顿全国性商会组织", en: "North Macedonia's national chamber of commerce" }, tags: ["商会"] },
                  { name: "北马其顿政府采购平台", url: "https://www.e-nabavki.gov.mk", desc: { zh: "北马其顿政府官方招标采购门户", en: "North Macedonia's official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Macedonia Yellow Pages", url: "https://www.macedoniayellowpages.mk", desc: { zh: "北马其顿企业黄页平台", en: "Macedonia business yellow pages" }, tags: ["企业名录"] },
                  { name: "Macedonian B2B Portal", url: "https://www.macedonianb2b.mk", desc: { zh: "北马其顿本土B2B平台", en: "Macedonia's domestic B2B platform" }, tags: ["B2B"] }
                ],
                distribution: [
                  { name: "North Macedonia Distribution Network", url: "https://www.distribution-macedonia.mk", desc: { zh: "北马其顿分销代理匹配平台", en: "North Macedonia distribution and agency matching platform" }, tags: ["分销", "代理"] }
                ]
              }
            },
            {
              id: "albania",
              name: { zh: "阿尔巴尼亚", en: "Albania" },
              flag: "AL",
              channels: {
                official: [
                  { name: "阿尔巴尼亚工商部", url: "https://www.mti.gov.al", desc: { zh: "阿尔巴尼亚政府工商业主管部门", en: "Albania's official ministry of trade and industry" }, tags: ["官方"] },
                  { name: "阿尔巴尼亚商会KOK", url: "https://www.kok.org.al", desc: { zh: "阿尔巴尼亚全国性商会组织", en: "Albania's national chamber of commerce" }, tags: ["商会"] },
                  { name: "阿尔巴尼亚政府采购平台", url: "https://www.app.gov.al", desc: { zh: "阿尔巴尼亚政府官方招标采购门户", en: "Albania's official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Albania Yellow Pages", url: "https://www.albaniayellowpages.al", desc: { zh: "阿尔巴尼亚企业黄页平台", en: "Albania business yellow pages" }, tags: ["企业名录"] },
                  { name: "Albanian B2B Portal", url: "https://www.albanianb2b.al", desc: { zh: "阿尔巴尼亚本土B2B平台", en: "Albania's domestic B2B platform" }, tags: ["B2B"] },
                  { name: "Tirana Business Directory", url: "https://www.tiranabusiness.al", desc: { zh: "地拉那商业目录平台", en: "Tirana business directory platform" }, tags: ["企业名录", "B2B"] }
                ],
                distribution: [
                  { name: "Albania Distribution Network", url: "https://www.distribution-albania.al", desc: { zh: "阿尔巴尼亚分销代理匹配平台", en: "Albania distribution and agency matching platform" }, tags: ["分销", "代理"] }
                ]
              }
            },
            {
              id: "malta",
              name: { zh: "马耳他", en: "Malta" },
              flag: "MT",
              channels: {
                official: [
                  { name: "马耳他贸易促进局MTA", url: "https://www.maltaenterprise.com", desc: { zh: "马耳他政府官方贸易促进机构", en: "Malta's official trade promotion agency" }, tags: ["官方"] },
                  { name: "马耳他商会Malta Chamber", url: "https://www.maltachamber.org.mt", desc: { zh: "马耳他全国性商会组织", en: "Malta's national chamber of commerce" }, tags: ["商会"] },
                  { name: "马耳他政府采购平台", url: "https://www.contracts.gov.mt", desc: { zh: "马耳他政府官方招标采购门户", en: "Malta's official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Malta Yellow Pages", url: "https://www.maltayellowpages.com.mt", desc: { zh: "马耳他企业黄页平台", en: "Malta business yellow pages" }, tags: ["企业名录"] },
                  { name: "Malta Business Directory", url: "https://www.maltabusinessdirectory.mt", desc: { zh: "马耳他商业目录平台", en: "Malta business directory platform" }, tags: ["企业名录", "B2B"] },
                  { name: "Kompass Malta", url: "https://mt.kompass.com", desc: { zh: "全球知名B2B数据库马耳他分站", en: "Global B2B database's Malta division" }, tags: ["B2B", "数据库"] }
                ],
                distribution: [
                  { name: "Malta Distribution Network", url: "https://www.distribution-malta.mt", desc: { zh: "马耳他分销代理匹配平台", en: "Malta distribution and agency matching platform" }, tags: ["分销", "代理"] }
                ]
              }
            },
            {
              id: "andorra",
              name: { zh: "安道尔", en: "Andorra" },
              flag: "AD",
              channels: {
                official: [
                  { name: "安道尔工商会CEA", url: "https://www.cea.ad", desc: { zh: "安道尔工商会组织", en: "Andorra's chamber of commerce and industry" }, tags: ["商会"] },
                  { name: "安道尔政府官网", url: "https://www.govern.ad", desc: { zh: "安道尔政府官方网站", en: "Official website of the Andorra government" }, tags: ["政府"] }
                ],
                b2b: [
                  { name: "Andorra Business Directory", url: "https://www.andorabusiness.ad", desc: { zh: "安道尔企业名录平台", en: "Andorra business directory platform" }, tags: ["企业名录", "B2B"] },
                  { name: "Pyrenees Trade Portal", url: "https://www.pyreneestrade.ad", desc: { zh: "比利牛斯地区贸易门户，覆盖安道尔市场", en: "Pyrenees region trade portal covering Andorra market" }, tags: ["B2B", "比利牛斯"] }
                ],
                distribution: [
                  { name: "Andorra Distribution Network", url: "https://www.distribution-andorra.ad", desc: { zh: "安道尔分销代理匹配平台", en: "Andorra distribution and agency matching platform" }, tags: ["分销", "代理"] }
                ]
              }
            },
            {
              id: "vatican",
              name: { zh: "梵蒂冈", en: "Vatican City" },
              flag: "VA",
              channels: {
                official: [
                  { name: "梵蒂冈商贸处", url: "https://www.vaticanstate.va", desc: { zh: "梵蒂冈城国商业事务处（梵蒂冈以宗教事务为主，商业导向有限）", en: "Vatican City State commerce affairs office (limited commercial orientation)" }, tags: ["官方"] }
                ],
                b2b: [],
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
                  { name: "Poland B2B", url: "https://www.polandb2b.com", desc: { zh: "波兰本土B2B平台", en: "Poland's domestic B2B platform" }, tags: ["B2B"] },
                  { name: "Poland Yellow Pages", url: "https://www.polandyellowpages.pl", desc: { zh: "波兰企业黄页平台", en: "Poland business yellow pages" }, tags: ["企业名录"] },
                  { name: "Polish B2B Portal", url: "https://www.polishb2b.pl", desc: { zh: "波兰本土B2B平台", en: "Poland's domestic B2B platform" }, tags: ["B2B"] }
                ],
                distribution: [
                  { name: "Poland Distribution Network", url: "https://www.distribution-poland.pl", desc: { zh: "波兰分销代理匹配平台", en: "Poland distribution and agency matching platform" }, tags: ["分销", "代理"] }
                ]
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
                  { name: "Czech B2B", url: "https://www.czechb2b.com", desc: { zh: "捷克本土B2B平台", en: "Czech Republic's domestic B2B platform" }, tags: ["B2B"] },
                  { name: "Czech Yellow Pages", url: "https://www.czechyellowpages.cz", desc: { zh: "捷克企业黄页平台", en: "Czech Republic business yellow pages" }, tags: ["企业名录"] },
                  { name: "Kompass Czech Republic", url: "https://cz.kompass.com", desc: { zh: "全球知名B2B数据库捷克分站", en: "Global B2B database's Czech Republic division" }, tags: ["B2B", "数据库"] }
                ],
                distribution: [
                  { name: "Czech Distribution Network", url: "https://www.distribution-czech.cz", desc: { zh: "捷克分销代理匹配平台", en: "Czech Republic distribution and agency matching platform" }, tags: ["分销", "代理"] }
                ]
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
                  { name: "Hungary B2B", url: "https://www.hungaryb2b.com", desc: { zh: "匈牙利本土B2B平台", en: "Hungary's domestic B2B platform" }, tags: ["B2B"] },
                  { name: "Hungarian Yellow Pages", url: "https://www.hungarianyellowpages.hu", desc: { zh: "匈牙利企业黄页平台", en: "Hungary business yellow pages" }, tags: ["企业名录"] },
                  { name: "Kompass Hungary", url: "https://hu.kompass.com", desc: { zh: "全球知名B2B数据库匈牙利分站", en: "Global B2B database's Hungary division" }, tags: ["B2B", "数据库"] }
                ],
                distribution: [
                  { name: "Hungary Distribution Network", url: "https://www.distribution-hungary.hu", desc: { zh: "匈牙利分销代理匹配平台", en: "Hungary distribution and agency matching platform" }, tags: ["分销", "代理"] }
                ]
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
                  { name: "Romania B2B", url: "https://www.romaniab2b.com", desc: { zh: "罗马尼亚本土B2B平台", en: "Romania's domestic B2B platform" }, tags: ["B2B"] },
                  { name: "Romania Yellow Pages", url: "https://www.romaniayellowpages.ro", desc: { zh: "罗马尼亚企业黄页平台", en: "Romania business yellow pages" }, tags: ["企业名录"] },
                  { name: "Kompass Romania", url: "https://ro.kompass.com", desc: { zh: "全球知名B2B数据库罗马尼亚分站", en: "Global B2B database's Romania division" }, tags: ["B2B", "数据库"] }
                ],
                distribution: [
                  { name: "Romania Distribution Network", url: "https://www.distribution-romania.ro", desc: { zh: "罗马尼亚分销代理匹配平台", en: "Romania distribution and agency matching platform" }, tags: ["分销", "代理"] }
                ]
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
                  { name: "Bulgaria B2B", url: "https://www.bulgariab2b.com", desc: { zh: "保加利亚本土B2B平台", en: "Bulgaria's domestic B2B platform" }, tags: ["B2B"] },
                  { name: "Bulgaria Yellow Pages", url: "https://www.bulgariayellowpages.bg", desc: { zh: "保加利亚企业黄页平台", en: "Bulgaria business yellow pages" }, tags: ["企业名录"] },
                  { name: "Kompass Bulgaria", url: "https://bg.kompass.com", desc: { zh: "全球知名B2B数据库保加利亚分站", en: "Global B2B database's Bulgaria division" }, tags: ["B2B", "数据库"] }
                ],
                distribution: [
                  { name: "Bulgaria Distribution Network", url: "https://www.distribution-bulgaria.bg", desc: { zh: "保加利亚分销代理匹配平台", en: "Bulgaria distribution and agency matching platform" }, tags: ["分销", "代理"] }
                ]
              }
            },
            {
              id: "estonia",
              name: { zh: "爱沙尼亚", en: "Estonia" },
              flag: "EE",
              channels: {
                official: [
                  { name: "爱沙尼亚企业局EAS", url: "https://www.eas.ee", desc: { zh: "爱沙尼亚政府官方企业促进机构", en: "Estonia's official enterprise agency" }, tags: ["官方"] },
                  { name: "爱沙尼亚工商会EK", url: "https://www.ek.ee", desc: { zh: "爱沙尼亚全国性商会组织", en: "Estonia's national chamber of commerce" }, tags: ["商会"] },
                  { name: "爱沙尼亚政府采购平台", url: "https://www.riigihanked.ee", desc: { zh: "爱沙尼亚政府官方招标采购门户", en: "Estonia's official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Estonia Yellow Pages", url: "https://www.eestikontakt.ee", desc: { zh: "爱沙尼亚企业黄页平台", en: "Estonia business directory" }, tags: ["企业名录"] },
                  { name: "Estonian B2B Portal", url: "https://www.estonianb2b.ee", desc: { zh: "爱沙尼亚本土B2B平台", en: "Estonia's domestic B2B platform" }, tags: ["B2B"] },
                  { name: "Kompass Estonia", url: "https://ee.kompass.com", desc: { zh: "全球知名B2B数据库爱沙尼亚分站", en: "Global B2B database's Estonia division" }, tags: ["B2B", "数据库"] }
                ],
                distribution: [
                  { name: "Estonia Distribution Network", url: "https://www.distribution-estonia.ee", desc: { zh: "爱沙尼亚分销代理匹配平台", en: "Estonia distribution and agency matching platform" }, tags: ["分销", "代理"] }
                ]
              }
            },
            {
              id: "latvia",
              name: { zh: "拉脱维亚", en: "Latvia" },
              flag: "LV",
              channels: {
                official: [
                  { name: "拉脱维亚投资发展署LIAA", url: "https://www.liaa.gov.lv", desc: { zh: "拉脱维亚政府官方投资发展机构", en: "Latvia's official investment development agency" }, tags: ["官方"] },
                  { name: "拉脱维亚商会LCCI", url: "https://www.chamber.lv", desc: { zh: "拉脱维亚全国性商会组织", en: "Latvia's national chamber of commerce" }, tags: ["商会"] },
                  { name: "拉脱维亚政府采购平台", url: "https://www.iub.gov.lv", desc: { zh: "拉脱维亚政府官方招标采购门户", en: "Latvia's official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Latvia Yellow Pages", url: "https://www.lvpasaka.lv", desc: { zh: "拉脱维亚企业黄页平台", en: "Latvia business yellow pages" }, tags: ["企业名录"] },
                  { name: "Latvian B2B Portal", url: "https://www.latvianb2b.lv", desc: { zh: "拉脱维亚本土B2B平台", en: "Latvia's domestic B2B platform" }, tags: ["B2B"] },
                  { name: "Baltic Trade Directory", url: "https://www.baltictrade.lv", desc: { zh: "波罗的海地区贸易目录平台", en: "Baltic region trade directory platform" }, tags: ["B2B", "波罗的海"] }
                ],
                distribution: [
                  { name: "Latvia Distribution Network", url: "https://www.distribution-latvia.lv", desc: { zh: "拉脱维亚分销代理匹配平台", en: "Latvia distribution and agency matching platform" }, tags: ["分销", "代理"] }
                ]
              }
            },
            {
              id: "lithuania",
              name: { zh: "立陶宛", en: "Lithuania" },
              flag: "LT",
              channels: {
                official: [
                  { name: "立陶宛企业局Versli Lietuva", url: "https://www.verslilietuva.lt", desc: { zh: "立陶宛政府官方企业促进机构", en: "Lithuania's official enterprise agency" }, tags: ["官方"] },
                  { name: "立陶宛商会LCC", url: "https://www.chamber.lt", desc: { zh: "立陶宛全国性商会组织", en: "Lithuania's national chamber of commerce" }, tags: ["商会"] },
                  { name: "立陶宛政府采购平台", url: "https://www.cvpp.lt", desc: { zh: "立陶宛政府官方招标采购门户", en: "Lithuania's official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Lithuania Yellow Pages", url: "https://www.lithuaniayellowpages.lt", desc: { zh: "立陶宛企业黄页平台", en: "Lithuania business yellow pages" }, tags: ["企业名录"] },
                  { name: "Lithuanian B2B Portal", url: "https://www.lithuanianb2b.lt", desc: { zh: "立陶宛本土B2B平台", en: "Lithuania's domestic B2B platform" }, tags: ["B2B"] },
                  { name: "Baltic Trade Directory", url: "https://www.baltictrade.lt", desc: { zh: "波罗的海地区贸易目录平台", en: "Baltic region trade directory platform" }, tags: ["B2B", "波罗的海"] }
                ],
                distribution: [
                  { name: "Lithuania Distribution Network", url: "https://www.distribution-lithuania.lt", desc: { zh: "立陶宛分销代理匹配平台", en: "Lithuania distribution and agency matching platform" }, tags: ["分销", "代理"] }
                ]
              }
            },
            {
              id: "russia",
              name: { zh: "俄罗斯", en: "Russia" },
              flag: "RU",
              channels: {
                official: [
                  { name: "俄罗斯联邦贸易部", url: "https://www.mincom.gov.ru", desc: { zh: "俄罗斯政府官方贸易主管部门", en: "Russia's official trade ministry" }, tags: ["官方"] },
                  { name: "俄罗斯出口中心REC", url: "https://www.exportcenter.ru", desc: { zh: "俄罗斯政府官方出口促进机构", en: "Russia's official export center" }, tags: ["官方", "出口促进"] },
                  { name: "俄罗斯政府采购平台Zakupki.gov", url: "https://zakupki.gov.ru", desc: { zh: "俄罗斯政府官方招标采购门户", en: "Russia's official government procurement portal" }, tags: ["政府采购", "招标"] }
                ],
                b2b: [
                  { name: "Russia Trade Portal", url: "https://www.russiatradeportal.ru", desc: { zh: "俄罗斯官方B2B贸易门户", en: "Russia's official B2B trade portal" }, tags: ["B2B", "官方"] },
                  { name: "Russian B2B", url: "https://www.russianb2b.ru", desc: { zh: "俄罗斯本土B2B平台", en: "Russia's domestic B2B platform" }, tags: ["B2B"] },
                  { name: "Kompass Russia", url: "https://ru.kompass.com", desc: { zh: "全球知名B2B数据库俄罗斯分站", en: "Global B2B database's Russia division" }, tags: ["B2B", "数据库"] },
                  { name: "Trade with Russia", url: "https://www.tradewithrussia.ru", desc: { zh: "俄罗斯贸易对接平台", en: "Russia trade matching platform" }, tags: ["B2B", "贸易对接"] }
                ],
                distribution: [
                  { name: "Russia Distribution Network", url: "https://www.russiadistribution.ru", desc: { zh: "俄罗斯分销代理匹配平台", en: "Russia distribution and agency matching platform" }, tags: ["分销", "代理"] },
                  { name: "Russian Agent & Distributor Directory", url: "https://www.russianagents.ru", desc: { zh: "俄罗斯代理与分销商目录平台", en: "Russian agent and distributor directory platform" }, tags: ["代理", "分销"] }
                ]
              }
            },
            {
              id: "belarus",
              name: { zh: "白俄罗斯", en: "Belarus" },
              flag: "BY",
              channels: {
                official: [
                  { name: "白俄罗斯经济部", url: "https://www.economy.gov.by", desc: { zh: "白俄罗斯政府经济主管部门", en: "Belarus' official economic ministry" }, tags: ["官方"] },
                  { name: "白俄罗斯工商会BelCCI", url: "https://www.cci.by", desc: { zh: "白俄罗斯全国性商会组织", en: "Belarus' national chamber of commerce" }, tags: ["商会"] },
                  { name: "白俄罗斯政府采购平台", url: "https://www.icetrade.by", desc: { zh: "白俄罗斯政府官方招标采购门户", en: "Belarus' official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Belarus Trade Portal", url: "https://www.belarustradeportal.by", desc: { zh: "白俄罗斯贸易门户平台", en: "Belarus trade portal platform" }, tags: ["B2B", "贸易"] },
                  { name: "Belarusian B2B", url: "https://www.belarusianb2b.by", desc: { zh: "白俄罗斯本土B2B平台", en: "Belarus' domestic B2B platform" }, tags: ["B2B"] },
                  { name: "Belarus Business Directory", url: "https://www.belbiznes.by", desc: { zh: "白俄罗斯商业目录平台", en: "Belarus business directory platform" }, tags: ["企业名录", "B2B"] }
                ],
                distribution: [
                  { name: "Belarus Distribution Network", url: "https://www.distribution-belarus.by", desc: { zh: "白俄罗斯分销代理匹配平台", en: "Belarus distribution and agency matching platform" }, tags: ["分销", "代理"] }
                ]
              }
            },
            {
              id: "ukraine",
              name: { zh: "乌克兰", en: "Ukraine" },
              flag: "UA",
              channels: {
                official: [
                  { name: "乌克兰经贸部", url: "https://www.me.gov.ua", desc: { zh: "乌克兰政府经贸主管部门", en: "Ukraine's official economic and trade ministry" }, tags: ["官方"] },
                  { name: "乌克兰国家商会Ukrainian CCI", url: "https://www.ucci.org.ua", desc: { zh: "乌克兰全国性商会组织", en: "Ukraine's national chamber of commerce" }, tags: ["商会"] },
                  { name: "乌克兰政府采购平台Prozorro", url: "https://prozorro.gov.ua", desc: { zh: "乌克兰政府官方招标采购门户", en: "Ukraine's official government procurement portal" }, tags: ["政府采购", "招标"] }
                ],
                b2b: [
                  { name: "Ukraine Trade Portal", url: "https://www.ukrtradeportal.ua", desc: { zh: "乌克兰贸易门户平台", en: "Ukraine trade portal platform" }, tags: ["B2B", "贸易"] },
                  { name: "Ukrainian B2B", url: "https://www.ukrainianb2b.ua", desc: { zh: "乌克兰本土B2B平台", en: "Ukraine's domestic B2B platform" }, tags: ["B2B"] },
                  { name: "Yellow Pages Ukraine", url: "https://www.yellowpages-ukraine.ua", desc: { zh: "乌克兰企业黄页平台", en: "Ukraine business yellow pages" }, tags: ["企业名录"] }
                ],
                distribution: [
                  { name: "Ukraine Distribution Network", url: "https://www.distribution-ukraine.ua", desc: { zh: "乌克兰分销代理匹配平台", en: "Ukraine distribution and agency matching platform" }, tags: ["分销", "代理"] }
                ]
              }
            },
            {
              id: "moldova",
              name: { zh: "摩尔多瓦", en: "Moldova" },
              flag: "MD",
              channels: {
                official: [
                  { name: "摩尔多瓦经济部", url: "https://mineco.gov.md", desc: { zh: "摩尔多瓦政府经济主管部门", en: "Moldova's official economic ministry" }, tags: ["官方"] },
                  { name: "摩尔多瓦工商会CCI", url: "https://www.cci.md", desc: { zh: "摩尔多瓦全国性商会组织", en: "Moldova's national chamber of commerce" }, tags: ["商会"] },
                  { name: "摩尔多瓦政府采购平台", url: "https://tender.gov.md", desc: { zh: "摩尔多瓦政府官方招标采购门户", en: "Moldova's official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Moldova Yellow Pages", url: "https://www.moldovayellowpages.md", desc: { zh: "摩尔多瓦企业黄页平台", en: "Moldova business yellow pages" }, tags: ["企业名录"] },
                  { name: "Moldovan B2B Portal", url: "https://www.moldovanb2b.md", desc: { zh: "摩尔多瓦本土B2B平台", en: "Moldova's domestic B2B platform" }, tags: ["B2B"] },
                  { name: "Trade with Moldova", url: "https://www.tradewithmoldova.md", desc: { zh: "摩尔多瓦贸易对接平台", en: "Moldova trade matching platform" }, tags: ["B2B", "贸易对接"] }
                ],
                distribution: [
                  { name: "Moldova Distribution Network", url: "https://www.distribution-moldova.md", desc: { zh: "摩尔多瓦分销代理匹配平台", en: "Moldova distribution and agency matching platform" }, tags: ["分销", "代理"] }
                ]
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
                  { name: "Sweden B2B", url: "https://www.swedenb2b.com", desc: { zh: "瑞典本土B2B平台", en: "Sweden's domestic B2B platform" }, tags: ["B2B"] },
                  { name: "Swedish Yellow Pages", url: "https://www.swedishyellowpages.se", desc: { zh: "瑞典企业黄页平台", en: "Sweden business yellow pages" }, tags: ["企业名录"] },
                  { name: "Kompass Sweden", url: "https://se.kompass.com", desc: { zh: "全球知名B2B数据库瑞典分站", en: "Global B2B database's Sweden division" }, tags: ["B2B", "数据库"] }
                ],
                distribution: [
                  { name: "Sweden Distribution Network", url: "https://www.distribution-sweden.se", desc: { zh: "瑞典分销代理匹配平台", en: "Sweden distribution and agency matching platform" }, tags: ["分销", "代理"] }
                ]
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
                  { name: "Denmark B2B", url: "https://www.denmarkb2b.com", desc: { zh: "丹麦本土B2B平台", en: "Denmark's domestic B2B platform" }, tags: ["B2B"] },
                  { name: "Danish Yellow Pages", url: "https://www.danishyellowpages.dk", desc: { zh: "丹麦企业黄页平台", en: "Denmark business yellow pages" }, tags: ["企业名录"] },
                  { name: "Kompass Denmark", url: "https://dk.kompass.com", desc: { zh: "全球知名B2B数据库丹麦分站", en: "Global B2B database's Denmark division" }, tags: ["B2B", "数据库"] }
                ],
                distribution: [
                  { name: "Denmark Distribution Network", url: "https://www.distribution-denmark.dk", desc: { zh: "丹麦分销代理匹配平台", en: "Denmark distribution and agency matching platform" }, tags: ["分销", "代理"] }
                ]
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
                  { name: "Finland B2B", url: "https://www.finlandb2b.com", desc: { zh: "芬兰本土B2B平台", en: "Finland's domestic B2B platform" }, tags: ["B2B"] },
                  { name: "Finnish Yellow Pages", url: "https://www.finnishyellowpages.fi", desc: { zh: "芬兰企业黄页平台", en: "Finland business yellow pages" }, tags: ["企业名录"] },
                  { name: "Kompass Finland", url: "https://fi.kompass.com", desc: { zh: "全球知名B2B数据库芬兰分站", en: "Global B2B database's Finland division" }, tags: ["B2B", "数据库"] }
                ],
                distribution: [
                  { name: "Finland Distribution Network", url: "https://www.distribution-finland.fi", desc: { zh: "芬兰分销代理匹配平台", en: "Finland distribution and agency matching platform" }, tags: ["分销", "代理"] }
                ]
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
                  { name: "Norway B2B", url: "https://www.norwayb2b.com", desc: { zh: "挪威本土B2B平台", en: "Norway's domestic B2B platform" }, tags: ["B2B"] },
                  { name: "Norwegian Yellow Pages", url: "https://www.norwegianyellowpages.no", desc: { zh: "挪威企业黄页平台", en: "Norway business yellow pages" }, tags: ["企业名录"] },
                  { name: "Kompass Norway", url: "https://no.kompass.com", desc: { zh: "全球知名B2B数据库挪威分站", en: "Global B2B database's Norway division" }, tags: ["B2B", "数据库"] }
                ],
                distribution: [
                  { name: "Norway Distribution Network", url: "https://www.distribution-norway.no", desc: { zh: "挪威分销代理匹配平台", en: "Norway distribution and agency matching platform" }, tags: ["分销", "代理"] }
                ]
              }
            },
            {
              id: "iceland",
              name: { zh: "冰岛", en: "Iceland" },
              flag: "IS",
              channels: {
                official: [
                  { name: "冰岛贸易与投资促进局", url: "https://www.israel.is", desc: { zh: "冰岛政府贸易投资促进机构", en: "Iceland's official trade and investment promotion agency" }, tags: ["官方"] },
                  { name: "冰岛商会ICC", url: "https://www.vi.is", desc: { zh: "冰岛全国性商会组织", en: "Iceland's national chamber of commerce" }, tags: ["商会"] },
                  { name: "冰岛政府采购平台", url: "https://www.samningagerdir.is", desc: { zh: "冰岛政府官方招标采购门户", en: "Iceland's official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Iceland Trade Portal", url: "https://www.icelandtrade.is", desc: { zh: "冰岛贸易门户平台", en: "Iceland trade portal platform" }, tags: ["B2B", "贸易"] },
                  { name: "Icelandic B2B", url: "https://www.icelandicb2b.is", desc: { zh: "冰岛本土B2B平台", en: "Iceland's domestic B2B platform" }, tags: ["B2B"] },
                  { name: "Kompass Iceland", url: "https://is.kompass.com", desc: { zh: "全球知名B2B数据库冰岛分站", en: "Global B2B database's Iceland division" }, tags: ["B2B", "数据库"] }
                ],
                distribution: [
                  { name: "Iceland Distribution Network", url: "https://www.distribution-iceland.is", desc: { zh: "冰岛分销代理匹配平台", en: "Iceland distribution and agency matching platform" }, tags: ["分销", "代理"] }
                ]
              }
            },
            {
              id: "faroe-islands",
              name: { zh: "法罗群岛", en: "Faroe Islands" },
              flag: "FO",
              channels: {
                official: [
                  { name: "法罗群岛贸易促进局", url: "https://www.faroeislands.fo", desc: { zh: "法罗群岛政府贸易促进机构", en: "Faroe Islands official trade promotion agency" }, tags: ["官方"] },
                  { name: "法罗群岛政府", url: "https://www.gov.fo", desc: { zh: "法罗群岛政府官方网站", en: "Official website of the Faroe Islands government" }, tags: ["政府"] }
                ],
                b2b: [
                  { name: "Faroe Islands Business Directory", url: "https://www.faroebusiness.fo", desc: { zh: "法罗群岛企业名录平台", en: "Faroe Islands business directory platform" }, tags: ["企业名录", "B2B"] }
                ],
                distribution: [
                  { name: "Faroe Islands Distribution Network", url: "https://www.distribution-faroe.fo", desc: { zh: "法罗群岛分销代理匹配平台", en: "Faroe Islands distribution and agency matching platform" }, tags: ["分销", "代理"] }
                ]
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
                distribution: [
                  { name: "Algeria Distribution Network", url: "https://www.algeriadistribution.dz", desc: { zh: "阿尔及利亚分销代理匹配平台", en: "Algeria distribution and agency matching platform" }, tags: ["分销", "代理", "阿尔及利亚"] }
                ]
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
                distribution: [
                  { name: "Morocco Distribution Network", url: "https://www.moroccodistribution.ma", desc: { zh: "摩洛哥分销代理匹配平台", en: "Morocco distribution and agency matching platform" }, tags: ["分销", "代理", "摩洛哥"] }
                ]
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
                distribution: [
                  { name: "Tunisia Distribution Network", url: "https://www.tunisiadistribution.tn", desc: { zh: "突尼斯分销代理匹配平台", en: "Tunisia distribution and agency matching platform" }, tags: ["分销", "代理", "突尼斯"] }
                ]
              }
            },
            {
              id: "libya",
              name: { zh: "利比亚", en: "Libya" },
              flag: "LY",
              channels: {
                official: [
                  { name: "利比亚经济和贸易部", url: "https://www.moet.gov.ly", desc: { zh: "利比亚政府官方贸易主管部门", en: "Libya's official commerce ministry" }, tags: ["官方"] },
                  { name: "利比亚政府采购平台", url: "https://www.tenders.ly", desc: { zh: "利比亚政府官方招标采购门户", en: "Libya's official government procurement portal" }, tags: ["政府采购"] },
                  { name: "利比亚工商会LCCI", url: "https://www.lcci.org.ly", desc: { zh: "利比亚全国性商会组织", en: "Libya's national chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "Libya Business Pages", url: "https://www.libyabusinesspages.com", desc: { zh: "利比亚企业名录平台", en: "Libya business pages" }, tags: ["企业名录"] },
                  { name: "Libya B2B", url: "https://www.libyab2b.com", desc: { zh: "利比亚本土B2B平台", en: "Libya's domestic B2B platform" }, tags: ["B2B"] },
                  { name: "Libya Yellow Pages", url: "https://www.libyayellowpages.com", desc: { zh: "利比亚企业黄页", en: "Libya yellow pages" }, tags: ["企业名录"] }
                ],
                distribution: [
                  { name: "Libya Distribution Network", url: "https://www.libyadistribution.ly", desc: { zh: "利比亚分销代理匹配平台", en: "Libya distribution and agency matching platform" }, tags: ["分销", "代理", "利比亚"] }
                ]
              }
            },
            {
              id: "sudan",
              name: { zh: "苏丹", en: "Sudan" },
              flag: "SD",
              channels: {
                official: [
                  { name: "苏丹贸易和供应部", url: "https://www.mot.gov.sd", desc: { zh: "苏丹政府官方贸易主管部门", en: "Sudan's official commerce ministry" }, tags: ["官方"] },
                  { name: "苏丹政府采购平台", url: "https://www.tenders.gov.sd", desc: { zh: "苏丹政府官方招标采购门户", en: "Sudan's official government procurement portal" }, tags: ["政府采购"] },
                  { name: "苏丹工商会", url: "https://www.fedsudancci.sd", desc: { zh: "苏丹全国性商会组织", en: "Sudan's national chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "Sudan Business Directory", url: "https://www.sudanbusiness.com", desc: { zh: "苏丹企业名录平台", en: "Sudan business directory" }, tags: ["企业名录"] },
                  { name: "Sudan Trade Portal", url: "https://www.sudantrade.gov.sd", desc: { zh: "苏丹贸易门户", en: "Sudan trade portal" }, tags: ["贸易"] },
                  { name: "Sudanese B2B", url: "https://www.sudanesb2b.com", desc: { zh: "苏丹本土B2B平台", en: "Sudanese domestic B2B platform" }, tags: ["B2B"] }
                ],
                distribution: [
                  { name: "Sudan Distribution Network", url: "https://www.sudandistribution.sd", desc: { zh: "苏丹分销代理匹配平台", en: "Sudan distribution and agency matching platform" }, tags: ["分销", "代理", "苏丹"] }
                ]
              }
            },
            {
              id: "south-sudan",
              name: { zh: "南苏丹", en: "South Sudan" },
              flag: "SS",
              channels: {
                official: [
                  { name: "南苏丹贸易和工业部", url: "https://www.moti.gov.ss", desc: { zh: "南苏丹政府官方贸易主管部门", en: "South Sudan's official commerce ministry" }, tags: ["官方"] },
                  { name: "南苏丹政府采购平台", url: "https://www.tenders.gov.ss", desc: { zh: "南苏丹政府官方招标采购门户", en: "South Sudan's official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "South Sudan Business Directory", url: "https://www.ssbusinessdirectory.com", desc: { zh: "南苏丹企业名录平台", en: "South Sudan business directory" }, tags: ["企业名录"] },
                  { name: "SS Trade Portal", url: "https://www.sstrade.gov.ss", desc: { zh: "南苏丹贸易门户", en: "South Sudan trade portal" }, tags: ["贸易"] }
                ],
                distribution: [
                  { name: "South Sudan Distribution Network", url: "https://www.southsudandistribution.ss", desc: { zh: "南苏丹分销代理匹配平台", en: "South Sudan distribution and agency matching platform" }, tags: ["分销", "代理", "南苏丹"] }
                ]
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
                distribution: [
                  { name: "Tanzania Distribution Network", url: "https://www.tanzaniadistribution.tz", desc: { zh: "坦桑尼亚分销代理匹配平台", en: "Tanzania distribution and agency matching platform" }, tags: ["分销", "代理", "坦桑尼亚"] }
                ]
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
                distribution: [
                  { name: "Ethiopia Distribution Network", url: "https://www.ethiopiadistribution.et", desc: { zh: "埃塞俄比亚分销代理匹配平台", en: "Ethiopia distribution and agency matching platform" }, tags: ["分销", "代理", "埃塞俄比亚"] }
                ]
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
                distribution: [
                  { name: "Uganda Distribution Network", url: "https://www.ugandadistribution.ug", desc: { zh: "乌干达分销代理匹配平台", en: "Uganda distribution and agency matching platform" }, tags: ["分销", "代理", "乌干达"] }
                ]
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
                distribution: [
                  { name: "Rwanda Distribution Network", url: "https://www.rwandadistribution.rw", desc: { zh: "卢旺达分销代理匹配平台", en: "Rwanda distribution and agency matching platform" }, tags: ["分销", "代理", "卢旺达"] }
                ]
              }
            },
            {
              id: "somalia",
              name: { zh: "索马里", en: "Somalia" },
              flag: "SO",
              channels: {
                official: [
                  { name: "索马里贸易和工业部", url: "https://www.mcti.gov.so", desc: { zh: "索马里政府官方贸易主管部门", en: "Somalia's official trade ministry" }, tags: ["官方"] },
                  { name: "索马里政府采购平台", url: "https://www.somaligov.so/tenders", desc: { zh: "索马里政府官方招标采购门户", en: "Somalia's official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Somalia Business Directory", url: "https://www.somaliabusiness.com", desc: { zh: "索马里企业名录平台", en: "Somalia business directory" }, tags: ["企业名录"] },
                  { name: "Somali Trade Portal", url: "https://www.somalitrade.so", desc: { zh: "索马里贸易门户", en: "Somali trade portal" }, tags: ["贸易"] }
                ],
                distribution: [
                  { name: "Somalia Distribution Network", url: "https://www.somaliadistribution.so", desc: { zh: "索马里分销代理匹配平台", en: "Somalia distribution and agency matching platform" }, tags: ["分销", "代理", "索马里"] }
                ]
              }
            },
            {
              id: "eritrea",
              name: { zh: "厄立特里亚", en: "Eritrea" },
              flag: "ER",
              channels: {
                official: [
                  { name: "厄立特里亚贸易和工业部", url: "https://www.moic.gov.er", desc: { zh: "厄立特里亚政府官方贸易主管部门", en: "Eritrea's official trade ministry" }, tags: ["官方"] },
                  { name: "厄立特里亚工商会", url: "https://www.cocci.org.er", desc: { zh: "厄立特里亚全国性商会组织", en: "Eritrea's national chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "Eritrea Business Directory", url: "https://www.eritreabusiness.com", desc: { zh: "厄立特里亚企业名录平台", en: "Eritrea business directory" }, tags: ["企业名录"] }
                ],
                distribution: [
                  { name: "Eritrea Distribution Network", url: "https://www.eritreadistribution.er", desc: { zh: "厄立特里亚分销代理匹配平台", en: "Eritrea distribution and agency matching platform" }, tags: ["分销", "代理", "厄立特里亚"] }
                ]
              }
            },
            {
              id: "djibouti",
              name: { zh: "吉布提", en: "Djibouti" },
              flag: "DJ",
              channels: {
                official: [
                  { name: "吉布提贸易和旅游部", url: "https://www.commerce.gov.dj", desc: { zh: "吉布提政府官方贸易主管部门", en: "Djibouti's official trade ministry" }, tags: ["官方"] },
                  { name: "吉布提工商会", url: "https://www.ccd.dj", desc: { zh: "吉布提全国性商会组织", en: "Djibouti's national chamber of commerce" }, tags: ["商会"] },
                  { name: "吉布提自由贸易区管理局", url: "https://www.djiboutifz.com", desc: { zh: "吉布提官方自由贸易区管理机构", en: "Djibouti's official free zone authority" }, tags: ["自贸区"] }
                ],
                b2b: [
                  { name: "Djibouti Business Directory", url: "https://www.djiboutibusiness.com", desc: { zh: "吉布提企业名录平台", en: "Djibouti business directory" }, tags: ["企业名录"] },
                  { name: "Djibouti Trade Portal", url: "https://www.djiboutitrade.dj", desc: { zh: "吉布提贸易门户", en: "Djibouti trade portal" }, tags: ["贸易"] },
                  { name: "Horn of Africa Trade", url: "https://www.hornafricatrade.com", desc: { zh: "非洲之角贸易门户", en: "Horn of Africa trade portal" }, tags: ["贸易"] }
                ],
                distribution: [
                  { name: "Djibouti Distribution Network", url: "https://www.djiboutidistribution.dj", desc: { zh: "吉布提分销代理匹配平台", en: "Djibouti distribution and agency matching platform" }, tags: ["分销", "代理", "吉布提"] }
                ]
              }
            },
            {
              id: "seychelles",
              name: { zh: "塞舌尔", en: "Seychelles" },
              flag: "SC",
              channels: {
                official: [
                  { name: "塞舌尔贸易发展局", url: "https://www.trade.seychelles", desc: { zh: "塞舌尔政府官方贸易促进机构", en: "Seychelles' official trade development agency" }, tags: ["官方"] },
                  { name: "塞舌尔工商会", url: "https://www.seychelleschamber.sc", desc: { zh: "塞舌尔全国性商会组织", en: "Seychelles' national chamber of commerce" }, tags: ["商会"] },
                  { name: "塞舌尔政府采购平台", url: "https://www.tenders.gov.sc", desc: { zh: "塞舌尔政府官方招标采购门户", en: "Seychelles' official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Seychelles Yellow Pages", url: "https://www.seychellesyellowpages.com", desc: { zh: "塞舌尔企业黄页", en: "Seychelles yellow pages" }, tags: ["企业名录"] },
                  { name: "Seychelles Business Directory", url: "https://www.seychellesbusiness.com", desc: { zh: "塞舌尔企业名录平台", en: "Seychelles business directory" }, tags: ["企业名录"] }
                ],
                distribution: [
                  { name: "Seychelles Distribution Network", url: "https://www.seychellesdistribution.sc", desc: { zh: "塞舌尔分销代理匹配平台", en: "Seychelles distribution and agency matching platform" }, tags: ["分销", "代理", "塞舌尔"] }
                ]
              }
            },
            {
              id: "comoros",
              name: { zh: "科摩罗", en: "Comoros" },
              flag: "KM",
              channels: {
                official: [
                  { name: "科摩罗贸易促进部", url: "https://www.commerce.gov.km", desc: { zh: "科摩罗政府官方贸易主管部门", en: "Comoros' official trade ministry" }, tags: ["官方"] },
                  { name: "科摩罗工商会", url: "https://www.ccic.km", desc: { zh: "科摩罗全国性商会组织", en: "Comoros' national chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "Comoros Business Directory", url: "https://www.comorosbusiness.com", desc: { zh: "科摩罗企业名录平台", en: "Comoros business directory" }, tags: ["企业名录"] }
                ],
                distribution: [
                  { name: "Comoros Distribution Network", url: "https://www.comorosdistribution.km", desc: { zh: "科摩罗分销代理匹配平台", en: "Comoros distribution and agency matching platform" }, tags: ["分销", "代理", "科摩罗"] }
                ]
              }
            },
            {
              id: "mauritius",
              name: { zh: "毛里求斯", en: "Mauritius" },
              flag: "MU",
              channels: {
                official: [
                  { name: "毛里求斯贸易管理委员会", url: "https://www.mti.gov.mu", desc: { zh: "毛里求斯政府官方贸易主管部门", en: "Mauritius' official trade ministry" }, tags: ["官方"] },
                  { name: "毛里求斯工商会", url: "https://www.mcci.org", desc: { zh: "毛里求斯全国性商会组织", en: "Mauritius' national chamber of commerce" }, tags: ["商会"] },
                  { name: "毛里求斯政府采购平台", url: "https://www.publicprocurement.gov.mu", desc: { zh: "毛里求斯政府官方招标采购门户", en: "Mauritius' official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Mauritius Yellow Pages", url: "https://www.yellowpages.mu", desc: { zh: "毛里求斯企业黄页", en: "Mauritius yellow pages" }, tags: ["企业名录"] },
                  { name: "Mauritius Business Directory", url: "https://www.mauritiusbusiness.com", desc: { zh: "毛里求斯企业名录平台", en: "Mauritius business directory" }, tags: ["企业名录"] },
                  { name: "Indian Ocean Trade", url: "https://www.indianoceantrade.com", desc: { zh: "印度洋贸易门户", en: "Indian Ocean trade portal" }, tags: ["贸易"] }
                ],
                distribution: [
                  { name: "Mauritius Distribution Network", url: "https://www.mauritiusdistribution.com", desc: { zh: "毛里求斯分销网络", en: "Mauritius distribution network" }, tags: ["分销"] }
                ]
              }
            },
            {
              id: "madagascar",
              name: { zh: "马达加斯加", en: "Madagascar" },
              flag: "MG",
              channels: {
                official: [
                  { name: "马达加斯加工商部", url: "https://www.mcbe.gov.mg", desc: { zh: "马达加斯加政府官方贸易主管部门", en: "Madagascar's official commerce ministry" }, tags: ["官方"] },
                  { name: "马达加斯加工商会", url: "https://www.ccim.mg", desc: { zh: "马达加斯加全国性商会组织", en: "Madagascar's national chamber of commerce" }, tags: ["商会"] },
                  { name: "马达加斯加政府采购平台", url: "https://www.marchespublics.gov.mg", desc: { zh: "马达加斯加政府官方招标采购门户", en: "Madagascar's official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Madagascar Business Directory", url: "https://www.madagascarbusiness.com", desc: { zh: "马达加斯加企业名录平台", en: "Madagascar business directory" }, tags: ["企业名录"] },
                  { name: "Malagasy Trade Portal", url: "https://www.malagasytrade.mg", desc: { zh: "马达加斯加贸易门户", en: "Malagasy trade portal" }, tags: ["贸易"] },
                  { name: "Mada Yellow Pages", url: "https://www.madayp.com", desc: { zh: "马达加斯加黄页", en: "Madagascar yellow pages" }, tags: ["企业名录"] }
                ],
                distribution: [
                  { name: "Madagascar Distribution Network", url: "https://www.madagascardistribution.mg", desc: { zh: "马达加斯加分销代理匹配平台", en: "Madagascar distribution and agency matching platform" }, tags: ["分销", "代理", "马达加斯加"] }
                ]
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
                distribution: [
                  { name: "Ghana Distribution Network", url: "https://www.ghanadistribution.gh", desc: { zh: "加纳分销代理匹配平台", en: "Ghana distribution and agency matching platform" }, tags: ["分销", "代理", "加纳"] }
                ]
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
                distribution: [
                  { name: "Cote d'Ivoire Distribution Network", url: "https://www.cotedivoiredistribution.ci", desc: { zh: "科特迪瓦分销代理匹配平台", en: "Côte d'Ivoire distribution and agency matching platform" }, tags: ["分销", "代理", "科特迪瓦"] }
                ]
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
                distribution: [
                  { name: "Senegal Distribution Network", url: "https://www.senegaldistribution.sn", desc: { zh: "塞内加尔分销代理匹配平台", en: "Senegal distribution and agency matching platform" }, tags: ["分销", "代理", "塞内加尔"] }
                ]
              }
            },
            {
              id: "mali",
              name: { zh: "马里", en: "Mali" },
              flag: "ML",
              channels: {
                official: [
                  { name: "马里贸易和竞争部", url: "https://www.commerce.gouv.ml", desc: { zh: "马里政府官方贸易主管部门", en: "Mali's official commerce ministry" }, tags: ["官方"] },
                  { name: "马里政府采购平台", url: "https://www.marchespublics.ml", desc: { zh: "马里政府官方招标采购门户", en: "Mali's official government procurement portal" }, tags: ["政府采购"] },
                  { name: "马里工商会", url: "https://www.ccim.ml", desc: { zh: "马里全国性商会组织", en: "Mali's national chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "Mali Business Directory", url: "https://www.malibusiness.com", desc: { zh: "马里企业名录平台", en: "Mali business directory" }, tags: ["企业名录"] },
                  { name: "Mali Trade Portal", url: "https://www.malitrade.ml", desc: { zh: "马里贸易门户", en: "Mali trade portal" }, tags: ["贸易"] }
                ],
                distribution: [
                  { name: "Mali Distribution Network", url: "https://www.malidistribution.ml", desc: { zh: "马里分销代理匹配平台", en: "Mali distribution and agency matching platform" }, tags: ["分销", "代理", "马里"] }
                ]
              }
            },
            {
              id: "burkina-faso",
              name: { zh: "布基纳法索", en: "Burkina Faso" },
              flag: "BF",
              channels: {
                official: [
                  { name: "布基纳法索贸易部", url: "https://www.commerce.gov.bf", desc: { zh: "布基纳法索政府官方贸易主管部门", en: "Burkina Faso's official commerce ministry" }, tags: ["官方"] },
                  { name: "布基纳法索工商会", url: "https://www.ccf.bf", desc: { zh: "布基纳法索全国性商会组织", en: "Burkina Faso's national chamber of commerce" }, tags: ["商会"] },
                  { name: "布基纳法索政府采购平台", url: "https://www.marchespublics.bf", desc: { zh: "布基纳法索政府官方招标采购门户", en: "Burkina Faso's official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Burkina Faso Business Directory", url: "https://www.bfbusiness.com", desc: { zh: "布基纳法索企业名录平台", en: "Burkina Faso business directory" }, tags: ["企业名录"] },
                  { name: "BF Trade Portal", url: "https://www.bftrade.bf", desc: { zh: "布基纳法索贸易门户", en: "Burkina Faso trade portal" }, tags: ["贸易"] }
                ],
                distribution: [
                  { name: "Burkina Faso Distribution Network", url: "https://www.burkinafasodistribution.bf", desc: { zh: "布基纳法索分销代理匹配平台", en: "Burkina Faso distribution and agency matching platform" }, tags: ["分销", "代理", "布基纳法索"] }
                ]
              }
            },
            {
              id: "guinea",
              name: { zh: "几内亚", en: "Guinea" },
              flag: "GN",
              channels: {
                official: [
                  { name: "几内亚贸易促进局", url: "https://www.apip.gov.gn", desc: { zh: "几内亚政府官方贸易促进机构", en: "Guinea's official trade promotion agency" }, tags: ["官方"] },
                  { name: "几内亚工商会", url: "https://www.ccpng.gn", desc: { zh: "几内亚全国性商会组织", en: "Guinea's national chamber of commerce" }, tags: ["商会"] },
                  { name: "几内亚政府采购平台", url: "https://www.marchespublics.gov.gn", desc: { zh: "几内亚政府官方招标采购门户", en: "Guinea's official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Guinea Business Directory", url: "https://www.guineabusiness.com", desc: { zh: "几内亚企业名录平台", en: "Guinea business directory" }, tags: ["企业名录"] },
                  { name: "Guinea Trade Portal", url: "https://www.guineatrade.gov.gn", desc: { zh: "几内亚贸易门户", en: "Guinea trade portal" }, tags: ["贸易"] }
                ],
                distribution: [
                  { name: "Guinea Distribution Network", url: "https://www.guineadistribution.gn", desc: { zh: "几内亚分销代理匹配平台", en: "Guinea distribution and agency matching platform" }, tags: ["分销", "代理", "几内亚"] }
                ]
              }
            },
            {
              id: "guinea-bissau",
              name: { zh: "几内亚比绍", en: "Guinea-Bissau" },
              flag: "GW",
              channels: {
                official: [
                  { name: "几内亚比绍贸易部", url: "https://www.commerce.gov.gw", desc: { zh: "几内亚比绍政府官方贸易主管部门", en: "Guinea-Bissau's official commerce ministry" }, tags: ["官方"] },
                  { name: "几内亚比绍政府采购平台", url: "https://www.tenders.gov.gw", desc: { zh: "几内亚比绍政府官方招标采购门户", en: "Guinea-Bissau's official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Guinea-Bissau Business Directory", url: "https://www.gwbusiness.com", desc: { zh: "几内亚比绍企业名录平台", en: "Guinea-Bissau business directory" }, tags: ["企业名录"] }
                ],
                distribution: [
                  { name: "Guinea-Bissau Distribution Network", url: "https://www.guineabissaudistribution.gw", desc: { zh: "几内亚比绍分销代理匹配平台", en: "Guinea-Bissau distribution and agency matching platform" }, tags: ["分销", "代理", "几内亚比绍"] }
                ]
              }
            },
            {
              id: "liberia",
              name: { zh: "利比里亚", en: "Liberia" },
              flag: "LR",
              channels: {
                official: [
                  { name: "利比里亚商业和工业部", url: "https://www.moci.gov.lr", desc: { zh: "利比里亚政府官方贸易主管部门", en: "Liberia's official commerce ministry" }, tags: ["官方"] },
                  { name: "利比里亚政府采购平台", url: "https://www.gpul.gov.lr", desc: { zh: "利比里亚政府官方招标采购门户", en: "Liberia's official government procurement portal" }, tags: ["政府采购"] },
                  { name: "利比里亚工商会", url: "https://www.lcci.org", desc: { zh: "利比里亚全国性商会组织", en: "Liberia's national chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "Liberia Business Directory", url: "https://www.liberiabusiness.com", desc: { zh: "利比里亚企业名录平台", en: "Liberia business directory" }, tags: ["企业名录"] },
                  { name: "Liberia Trade Portal", url: "https://www.libertade.gov.lr", desc: { zh: "利比里亚贸易门户", en: "Liberia trade portal" }, tags: ["贸易"] }
                ],
                distribution: [
                  { name: "Liberia Distribution Network", url: "https://www.liberiadistribution.lr", desc: { zh: "利比里亚分销代理匹配平台", en: "Liberia distribution and agency matching platform" }, tags: ["分销", "代理", "利比里亚"] }
                ]
              }
            },
            {
              id: "sierra-leone",
              name: { zh: "塞拉利昂", en: "Sierra Leone" },
              flag: "SL",
              channels: {
                official: [
                  { name: "塞拉利昂贸易和工业部", url: "https://www.miti.gov.sl", desc: { zh: "塞拉利昂政府官方贸易主管部门", en: "Sierra Leone's official trade ministry" }, tags: ["官方"] },
                  { name: "塞拉利昂政府采购平台", url: "https://www.tenders.gov.sl", desc: { zh: "塞拉利昂政府官方招标采购门户", en: "Sierra Leone's official government procurement portal" }, tags: ["政府采购"] },
                  { name: "塞拉利昂工商会", url: "https://www.nacci-sl.org", desc: { zh: "塞拉利昂全国性商会组织", en: "Sierra Leone's national chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "Sierra Leone Business Directory", url: "https://www.sierraleonebusiness.com", desc: { zh: "塞拉利昂企业名录平台", en: "Sierra Leone business directory" }, tags: ["企业名录"] },
                  { name: "SL Trade Portal", url: "https://www.sltp.gov.sl", desc: { zh: "塞拉利昂贸易门户", en: "Sierra Leone trade portal" }, tags: ["贸易"] }
                ],
                distribution: [
                  { name: "Sierra Leone Distribution Network", url: "https://www.sierraleonedistribution.sl", desc: { zh: "塞拉利昂分销代理匹配平台", en: "Sierra Leone distribution and agency matching platform" }, tags: ["分销", "代理", "塞拉利昂"] }
                ]
              }
            },
            {
              id: "togo",
              name: { zh: "多哥", en: "Togo" },
              flag: "TG",
              channels: {
                official: [
                  { name: "多哥贸易促进局", url: "https://www.ctrp.tg", desc: { zh: "多哥政府官方贸易促进机构", en: "Togo's official trade promotion agency" }, tags: ["官方"] },
                  { name: "多哥工商会", url: "https://www.ccit.tg", desc: { zh: "多哥全国性商会组织", en: "Togo's national chamber of commerce" }, tags: ["商会"] },
                  { name: "多哥政府采购平台", url: "https://www.marchespublics.tg", desc: { zh: "多哥政府官方招标采购门户", en: "Togo's official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Togo Business Directory", url: "https://www.togobusiness.com", desc: { zh: "多哥企业名录平台", en: "Togo business directory" }, tags: ["企业名录"] },
                  { name: "Togo Trade Portal", url: "https://www.togotrade.tg", desc: { zh: "多哥贸易门户", en: "Togo trade portal" }, tags: ["贸易"] },
                  { name: "Togo Yellow Pages", url: "https://www.togoyellowpages.com", desc: { zh: "多哥企业黄页", en: "Togo yellow pages" }, tags: ["企业名录"] }
                ],
                distribution: [
                  { name: "Togo Distribution Network", url: "https://www.togodistribution.tg", desc: { zh: "多哥分销代理匹配平台", en: "Togo distribution and agency matching platform" }, tags: ["分销", "代理", "多哥"] }
                ]
              }
            },
            {
              id: "benin",
              name: { zh: "贝宁", en: "Benin" },
              flag: "BJ",
              channels: {
                official: [
                  { name: "贝宁贸易和工业部", url: "https://www.commerce.gouv.bj", desc: { zh: "贝宁政府官方贸易主管部门", en: "Benin's official commerce ministry" }, tags: ["官方"] },
                  { name: "贝宁工商会", url: "https://www.ccib.bj", desc: { zh: "贝宁全国性商会组织", en: "Benin's national chamber of commerce" }, tags: ["商会"] },
                  { name: "贝宁政府采购平台", url: "https://www.marchespublics.bj", desc: { zh: "贝宁政府官方招标采购门户", en: "Benin's official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Benin Business Directory", url: "https://www.beninbusiness.com", desc: { zh: "贝宁企业名录平台", en: "Benin business directory" }, tags: ["企业名录"] },
                  { name: "Benin Trade Portal", url: "https://www.benintrade.bj", desc: { zh: "贝宁贸易门户", en: "Benin trade portal" }, tags: ["贸易"] },
                  { name: "Benin Yellow Pages", url: "https://www.beninyellowpages.com", desc: { zh: "贝宁企业黄页", en: "Benin yellow pages" }, tags: ["企业名录"] }
                ],
                distribution: [
                  { name: "Benin Distribution Network", url: "https://www.benindistribution.bj", desc: { zh: "贝宁分销代理匹配平台", en: "Benin distribution and agency matching platform" }, tags: ["分销", "代理", "贝宁"] }
                ]
              }
            },
            {
              id: "niger",
              name: { zh: "尼日尔", en: "Niger" },
              flag: "NE",
              channels: {
                official: [
                  { name: "尼日尔贸易部", url: "https://www.commerce.gouv.ne", desc: { zh: "尼日尔政府官方贸易主管部门", en: "Niger's official commerce ministry" }, tags: ["官方"] },
                  { name: "尼日尔工商会", url: "https://www.ccin.ne", desc: { zh: "尼日尔全国性商会组织", en: "Niger's national chamber of commerce" }, tags: ["商会"] },
                  { name: "尼日尔政府采购平台", url: "https://www.marchespublics.ne", desc: { zh: "尼日尔政府官方招标采购门户", en: "Niger's official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Niger Business Directory", url: "https://www.nigerbusiness.com", desc: { zh: "尼日尔企业名录平台", en: "Niger business directory" }, tags: ["企业名录"] },
                  { name: "Niger Trade Portal", url: "https://www.nigertrade.ne", desc: { zh: "尼日尔贸易门户", en: "Niger trade portal" }, tags: ["贸易"] }
                ],
                distribution: [
                  { name: "Niger Distribution Network", url: "https://www.nigerdistribution.ne", desc: { zh: "尼日尔分销代理匹配平台", en: "Niger distribution and agency matching platform" }, tags: ["分销", "代理", "尼日尔"] }
                ]
              }
            },
            {
              id: "gambia",
              name: { zh: "冈比亚", en: "Gambia" },
              flag: "GM",
              channels: {
                official: [
                  { name: "冈比亚贸易部", url: "https://www.commerce.gov.gm", desc: { zh: "冈比亚政府官方贸易主管部门", en: "Gambia's official commerce ministry" }, tags: ["官方"] },
                  { name: "冈比亚工商会", url: "https://www.gacci.gm", desc: { zh: "冈比亚全国性商会组织", en: "Gambia's national chamber of commerce" }, tags: ["商会"] },
                  { name: "冈比亚政府采购平台", url: "https://www.tenders.gov.gm", desc: { zh: "冈比亚政府官方招标采购门户", en: "Gambia's official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Gambia Business Directory", url: "https://www.gambiabusiness.com", desc: { zh: "冈比亚企业名录平台", en: "Gambia business directory" }, tags: ["企业名录"] },
                  { name: "Gambia Trade Portal", url: "https://www.gambiatrade.gm", desc: { zh: "冈比亚贸易门户", en: "Gambia trade portal" }, tags: ["贸易"] }
                ],
                distribution: [
                  { name: "Gambia Distribution Network", url: "https://www.gambiadistribution.gm", desc: { zh: "冈比亚分销代理匹配平台", en: "Gambia distribution and agency matching platform" }, tags: ["分销", "代理", "冈比亚"] }
                ]
              }
            },
            {
              id: "cape-verde",
              name: { zh: "佛得角", en: "Cape Verde" },
              flag: "CV",
              channels: {
                official: [
                  { name: "佛得角经济和商业部", url: "https://www.mec.gov.cv", desc: { zh: "佛得角政府官方贸易主管部门", en: "Cape Verde's official commerce ministry" }, tags: ["官方"] },
                  { name: "佛得角工商会", url: "https://www.ccic.cv", desc: { zh: "佛得角全国性商会组织", en: "Cape Verde's national chamber of commerce" }, tags: ["商会"] },
                  { name: "佛得角政府采购平台", url: "https://www.contratacao.gov.cv", desc: { zh: "佛得角政府官方招标采购门户", en: "Cape Verde's official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Cape Verde Business Directory", url: "https://www.caboverdebusiness.com", desc: { zh: "佛得角企业名录平台", en: "Cape Verde business directory" }, tags: ["企业名录"] },
                  { name: "CV Trade Portal", url: "https://www.cvtrade.cv", desc: { zh: "佛得角贸易门户", en: "Cape Verde trade portal" }, tags: ["贸易"] }
                ],
                distribution: [
                  { name: "Cape Verde Distribution Network", url: "https://www.capeverdedistribution.cv", desc: { zh: "佛得角分销代理匹配平台", en: "Cape Verde distribution and agency matching platform" }, tags: ["分销", "代理", "佛得角"] }
                ]
              }
            },
            {
              id: "mauritania",
              name: { zh: "毛里塔尼亚", en: "Mauritania" },
              flag: "MR",
              channels: {
                official: [
                  { name: "毛里塔尼亚贸易、手工业和旅游部", url: "https://www.commerce.gov.mr", desc: { zh: "毛里塔尼亚政府官方贸易主管部门", en: "Mauritania's official commerce ministry" }, tags: ["官方"] },
                  { name: "毛里塔尼亚工商会", url: "https://www.ccim.mr", desc: { zh: "毛里塔尼亚全国性商会组织", en: "Mauritania's national chamber of commerce" }, tags: ["商会"] },
                  { name: "毛里塔尼亚政府采购平台", url: "https://www.marchespublics.gov.mr", desc: { zh: "毛里塔尼亚政府官方招标采购门户", en: "Mauritania's official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Mauritania Business Directory", url: "https://www.mauritaniabusiness.com", desc: { zh: "毛里塔尼亚企业名录平台", en: "Mauritania business directory" }, tags: ["企业名录"] },
                  { name: "Mauritania Trade Portal", url: "https://www.mauritaniatrade.mr", desc: { zh: "毛里塔尼亚贸易门户", en: "Mauritania trade portal" }, tags: ["贸易"] }
                ],
                distribution: [
                  { name: "Mauritania Distribution Network", url: "https://www.mauritaniadistribution.mr", desc: { zh: "毛里塔尼亚分销代理匹配平台", en: "Mauritania distribution and agency matching platform" }, tags: ["分销", "代理", "毛里塔尼亚"] }
                ]
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
                distribution: [
                  { name: "Zambia Distribution Network", url: "https://www.zambiadistribution.zm", desc: { zh: "赞比亚分销代理匹配平台", en: "Zambia distribution and agency matching platform" }, tags: ["分销", "代理", "赞比亚"] }
                ]
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
                distribution: [
                  { name: "Angola Distribution Network", url: "https://www.angoladistribution.ao", desc: { zh: "安哥拉分销代理匹配平台", en: "Angola distribution and agency matching platform" }, tags: ["分销", "代理", "安哥拉"] }
                ]
              }
            },
            {
              id: "namibia",
              name: { zh: "纳米比亚", en: "Namibia" },
              flag: "NA",
              channels: {
                official: [
                  { name: "纳米比亚贸易和工业部", url: "https://www.mti.gov.na", desc: { zh: "纳米比亚政府官方贸易主管部门", en: "Namibia's official trade ministry" }, tags: ["官方"] },
                  { name: "纳米比亚工商会", url: "https://www.nacci.com.na", desc: { zh: "纳米比亚全国性商会组织", en: "Namibia's national chamber of commerce" }, tags: ["商会"] },
                  { name: "纳米比亚政府采购平台", url: "https://www.tenders.gov.na", desc: { zh: "纳米比亚政府官方招标采购门户", en: "Namibia's official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Namibia Business Directory", url: "https://www.namibiabusiness.info", desc: { zh: "纳米比亚企业名录平台", en: "Namibia business directory" }, tags: ["企业名录"] },
                  { name: "Namibia B2B", url: "https://www.namibiab2b.com", desc: { zh: "纳米比亚本土B2B平台", en: "Namibia's domestic B2B platform" }, tags: ["B2B"] }
                ],
                distribution: [
                  { name: "Namibia Distribution Network", url: "https://www.namibiadistribution.na", desc: { zh: "纳米比亚分销代理匹配平台", en: "Namibia distribution and agency matching platform" }, tags: ["分销", "代理", "纳米比亚"] }
                ]
              }
            },
            {
              id: "botswana",
              name: { zh: "博茨瓦纳", en: "Botswana" },
              flag: "BW",
              channels: {
                official: [
                  { name: "博茨瓦纳贸易和投资部", url: "https://www.miti.gov.bw", desc: { zh: "博茨瓦纳政府官方贸易主管部门", en: "Botswana's official trade ministry" }, tags: ["官方"] },
                  { name: "博茨瓦纳工商会", url: "https://www.boc.chamber.bw", desc: { zh: "博茨瓦纳全国性商会组织", en: "Botswana's national chamber of commerce" }, tags: ["商会"] },
                  { name: "博茨瓦纳政府采购平台", url: "https://www.tenders.gov.bw", desc: { zh: "博茨瓦纳政府官方招标采购门户", en: "Botswana's official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Botswana Business Pages", url: "https://www.botswanabusinesspages.com", desc: { zh: "博茨瓦纳企业名录平台", en: "Botswana business pages" }, tags: ["企业名录"] },
                  { name: "Botswana B2B", url: "https://www.botswanab2b.com", desc: { zh: "博茨瓦纳本土B2B平台", en: "Botswana's domestic B2B platform" }, tags: ["B2B"] },
                  { name: "Bizbwana", url: "https://www.bizbwana.co.bw", desc: { zh: "博茨瓦纳商业目录", en: "Botswana business directory" }, tags: ["企业名录"] }
                ],
                distribution: [
                  { name: "Botswana Distribution Network", url: "https://www.botswanadistribution.bw", desc: { zh: "博茨瓦纳分销代理匹配平台", en: "Botswana distribution and agency matching platform" }, tags: ["分销", "代理", "博茨瓦纳"] }
                ]
              }
            },
            {
              id: "zimbabwe",
              name: { zh: "津巴布韦", en: "Zimbabwe" },
              flag: "ZW",
              channels: {
                official: [
                  { name: "津巴布韦贸易和工业部", url: "https://www.miti.gov.zw", desc: { zh: "津巴布韦政府官方贸易主管部门", en: "Zimbabwe's official trade ministry" }, tags: ["官方"] },
                  { name: "津巴布韦工商会", url: "https://www.zimtrada.co.zw", desc: { zh: "津巴布韦全国性商会组织", en: "Zimbabwe's national chamber of commerce" }, tags: ["商会"] },
                  { name: "津巴布韦政府采购平台", url: "https://www.tenders.gov.zw", desc: { zh: "津巴布韦政府官方招标采购门户", en: "Zimbabwe's official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Zimbabwe Business Directory", url: "https://www.zimbabwebusiness.com", desc: { zh: "津巴布韦企业名录平台", en: "Zimbabwe business directory" }, tags: ["企业名录"] },
                  { name: "Zimbabwe Trade Portal", url: "https://www.zimtrade.co.zw", desc: { zh: "津巴布韦贸易门户", en: "Zimbabwe trade portal" }, tags: ["贸易"] },
                  { name: "Harare Business", url: "https://www.hararebiz.com", desc: { zh: "哈拉雷商业目录", en: "Harare business directory" }, tags: ["企业名录"] }
                ],
                distribution: [
                  { name: "Zimbabwe Distribution Network", url: "https://www.zimbabwedistribution.zw", desc: { zh: "津巴布韦分销代理匹配平台", en: "Zimbabwe distribution and agency matching platform" }, tags: ["分销", "代理", "津巴布韦"] }
                ]
              }
            },
            {
              id: "mozambique",
              name: { zh: "莫桑比克", en: "Mozambique" },
              flag: "MZ",
              channels: {
                official: [
                  { name: "莫桑比克贸易和工业部", url: "https://www.mic.gov.mz", desc: { zh: "莫桑比克政府官方贸易主管部门", en: "Mozambique's official trade ministry" }, tags: ["官方"] },
                  { name: "莫桑比克工商会", url: "https://www.ccm.co.mz", desc: { zh: "莫桑比克全国性商会组织", en: "Mozambique's national chamber of commerce" }, tags: ["商会"] },
                  { name: "莫桑比克政府采购平台", url: "https://www.moinhas.gov.mz", desc: { zh: "莫桑比克政府官方招标采购门户", en: "Mozambique's official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Mozambique Business Directory", url: "https://www.mozambiquebusiness.com", desc: { zh: "莫桑比克企业名录平台", en: "Mozambique business directory" }, tags: ["企业名录"] },
                  { name: "Moz Trade Portal", url: "https://www.moztrade.mz", desc: { zh: "莫桑比克贸易门户", en: "Mozambique trade portal" }, tags: ["贸易"] },
                  { name: "Mozambique B2B", url: "https://www.mozb2b.com", desc: { zh: "莫桑比克本土B2B平台", en: "Mozambique's domestic B2B platform" }, tags: ["B2B"] }
                ],
                distribution: [
                  { name: "Mozambique Distribution Network", url: "https://www.mozambiquedistribution.mz", desc: { zh: "莫桑比克分销代理匹配平台", en: "Mozambique distribution and agency matching platform" }, tags: ["分销", "代理", "莫桑比克"] }
                ]
              }
            },
            {
              id: "malawi",
              name: { zh: "马拉维", en: "Malawi" },
              flag: "MW",
              channels: {
                official: [
                  { name: "马拉维贸易和工业部", url: "https://www.mti.gov.mw", desc: { zh: "马拉维政府官方贸易主管部门", en: "Malawi's official trade ministry" }, tags: ["官方"] },
                  { name: "马拉维工商会", url: "https://www.mcci.org.mw", desc: { zh: "马拉维全国性商会组织", en: "Malawi's national chamber of commerce" }, tags: ["商会"] },
                  { name: "马拉维政府采购平台", url: "https://www.tenders.gov.mw", desc: { zh: "马拉维政府官方招标采购门户", en: "Malawi's official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Malawi Business Directory", url: "https://www.malawibusiness.com", desc: { zh: "马拉维企业名录平台", en: "Malawi business directory" }, tags: ["企业名录"] },
                  { name: "Malawi Trade Portal", url: "https://www.malawitrade.mw", desc: { zh: "马拉维贸易门户", en: "Malawi trade portal" }, tags: ["贸易"] }
                ],
                distribution: [
                  { name: "Malawi Distribution Network", url: "https://www.malawidistribution.mw", desc: { zh: "马拉维分销代理匹配平台", en: "Malawi distribution and agency matching platform" }, tags: ["分销", "代理", "马拉维"] }
                ]
              }
            },
            {
              id: "lesotho",
              name: { zh: "莱索托", en: "Lesotho" },
              flag: "LS",
              channels: {
                official: [
                  { name: "莱索托贸易和工业部", url: "https://www.mti.gov.ls", desc: { zh: "莱索托政府官方贸易主管部门", en: "Lesotho's official trade ministry" }, tags: ["官方"] },
                  { name: "莱索托工商会", url: "https://www.lcci.org.ls", desc: { zh: "莱索托全国性商会组织", en: "Lesotho's national chamber of commerce" }, tags: ["商会"] },
                  { name: "莱索托政府采购平台", url: "https://www.tenders.gov.ls", desc: { zh: "莱索托政府官方招标采购门户", en: "Lesotho's official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Lesotho Business Directory", url: "https://www.lesothobusiness.com", desc: { zh: "莱索托企业名录平台", en: "Lesotho business directory" }, tags: ["企业名录"] },
                  { name: "Lesotho Trade Portal", url: "https://www.lesothotrade.ls", desc: { zh: "莱索托贸易门户", en: "Lesotho trade portal" }, tags: ["贸易"] }
                ],
                distribution: [
                  { name: "Lesotho Distribution Network", url: "https://www.lesothodistribution.ls", desc: { zh: "莱索托分销代理匹配平台", en: "Lesotho distribution and agency matching platform" }, tags: ["分销", "代理", "莱索托"] }
                ]
              }
            },
            {
              id: "eswatini",
              name: { zh: "斯威士兰", en: "Eswatini" },
              flag: "SZ",
              channels: {
                official: [
                  { name: "斯威士兰企业贸易部", url: "https://www.gob.gov.sz", desc: { zh: "斯威士兰政府官方贸易主管部门", en: "Eswatini's official trade ministry" }, tags: ["官方"] },
                  { name: "斯威士兰工商会", url: "https://www.swazichamber.co.sz", desc: { zh: "斯威士兰全国性商会组织", en: "Eswatini's national chamber of commerce" }, tags: ["商会"] },
                  { name: "斯威士兰政府采购平台", url: "https://www.tenders.gov.sz", desc: { zh: "斯威士兰政府官方招标采购门户", en: "Eswatini's official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Eswatini Business Directory", url: "https://www.eswatiniusiness.com", desc: { zh: "斯威士兰企业名录平台", en: "Eswatini business directory" }, tags: ["企业名录"] },
                  { name: "Swazi Trade Portal", url: "https://www.swazitrade.sz", desc: { zh: "斯威士兰贸易门户", en: "Swazi trade portal" }, tags: ["贸易"] }
                ],
                distribution: [
                  { name: "Eswatini Distribution Network", url: "https://www.eswatiniistribution.sz", desc: { zh: "斯威士兰分销代理匹配平台", en: "Eswatini distribution and agency matching platform" }, tags: ["分销", "代理", "斯威士兰"] }
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
                distribution: [
                  { name: "DRC Distribution Network", url: "https://www.drcdistribution.cd", desc: { zh: "刚果（金）分销代理匹配平台", en: "DR Congo distribution and agency matching platform" }, tags: ["分销", "代理", "刚果金"] }
                ]
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
                distribution: [
                  { name: "Cameroon Distribution Network", url: "https://www.cameroondistribution.cm", desc: { zh: "喀麦隆分销代理匹配平台", en: "Cameroon distribution and agency matching platform" }, tags: ["分销", "代理", "喀麦隆"] }
                ]
              }
            },
            {
              id: "republic-of-congo",
              name: { zh: "刚果（布）", en: "Republic of Congo" },
              flag: "CG",
              channels: {
                official: [
                  { name: "刚果（布）商业促进部", url: "https://www.commerce.gouv.cg", desc: { zh: "刚果布官方贸易主管部门", en: "Republic of Congo's official commerce ministry" }, tags: ["官方"] },
                  { name: "刚果（布）工商会", url: "https://www.ccic.cg", desc: { zh: "刚果布全国性商会组织", en: "Republic of Congo's national chamber of commerce" }, tags: ["商会"] },
                  { name: "刚果（布）政府采购平台", url: "https://www.marchespublics.cg", desc: { zh: "刚果布政府官方招标采购门户", en: "Republic of Congo's official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Congo Brazzaville Business Directory", url: "https://www.congobusiness.com", desc: { zh: "刚果布企业名录平台", en: "Congo Brazzaville business directory" }, tags: ["企业名录"] },
                  { name: "Congo B2B", url: "https://www.congob2b.com", desc: { zh: "刚果布本土B2B平台", en: "Congo Brazzaville domestic B2B platform" }, tags: ["B2B"] }
                ],
                distribution: [
                  { name: "Congo Brazzaville Distribution Network", url: "https://www.congodistribution.cg", desc: { zh: "刚果布分销代理匹配平台", en: "Congo Brazzaville distribution and agency matching platform" }, tags: ["分销", "代理", "刚果布"] }
                ]
              }
            },
            {
              id: "gabon",
              name: { zh: "加蓬", en: "Gabon" },
              flag: "GA",
              channels: {
                official: [
                  { name: "加蓬贸易部", url: "https://www.commerce.gouv.ga", desc: { zh: "加蓬政府官方贸易主管部门", en: "Gabon's official commerce ministry" }, tags: ["官方"] },
                  { name: "加蓬工商会", url: "https://www.ccig.ga", desc: { zh: "加蓬全国性商会组织", en: "Gabon's national chamber of commerce" }, tags: ["商会"] },
                  { name: "加蓬政府采购平台", url: "https://www.marchespublics.ga", desc: { zh: "加蓬政府官方招标采购门户", en: "Gabon's official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Gabon Business Directory", url: "https://www.gabonbusiness.com", desc: { zh: "加蓬企业名录平台", en: "Gabon business directory" }, tags: ["企业名录"] },
                  { name: "Gabon Trade Portal", url: "https://www.gabattrade.com", desc: { zh: "加蓬贸易门户", en: "Gabon trade portal" }, tags: ["贸易"] },
                  { name: "Gabon B2B", url: "https://www.gabonb2b.com", desc: { zh: "加蓬本土B2B平台", en: "Gabon's domestic B2B platform" }, tags: ["B2B"] }
                ],
                distribution: [
                  { name: "Gabon Distribution Network", url: "https://www.gabondistribution.ga", desc: { zh: "加蓬分销代理匹配平台", en: "Gabon distribution and agency matching platform" }, tags: ["分销", "代理", "加蓬"] }
                ]
              }
            },
            {
              id: "central-african-republic",
              name: { zh: "中非", en: "Central African Republic" },
              flag: "CF",
              channels: {
                official: [
                  { name: "中非贸易促进部", url: "https://www.commerce.cf", desc: { zh: "中非官方贸易主管部门", en: "Central African Republic's official commerce ministry" }, tags: ["官方"] },
                  { name: "中非工商会", url: "https://www.ccica.cf", desc: { zh: "中非全国性商会组织", en: "Central African Republic's national chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "Central African Business Directory", url: "https://www.carbusiness.com", desc: { zh: "中非企业名录平台", en: "Central African business directory" }, tags: ["企业名录"] }
                ],
                distribution: [
                  { name: "CAR Distribution Network", url: "https://www.cardistribution.cf", desc: { zh: "中非共和国分销代理匹配平台", en: "CAR distribution and agency matching platform" }, tags: ["分销", "代理", "中非"] }
                ]
              }
            },
            {
              id: "chad",
              name: { zh: "乍得", en: "Chad" },
              flag: "TD",
              channels: {
                official: [
                  { name: "乍得贸易和竞争部", url: "https://www.commerce.gouv.td", desc: { zh: "乍得政府官方贸易主管部门", en: "Chad's official commerce ministry" }, tags: ["官方"] },
                  { name: "乍得工商会", url: "https://www.cctd.td", desc: { zh: "乍得全国性商会组织", en: "Chad's national chamber of commerce" }, tags: ["商会"] },
                  { name: "乍得政府采购平台", url: "https://www.marchespublics.td", desc: { zh: "乍得政府官方招标采购门户", en: "Chad's official government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Chad Business Directory", url: "https://www.chadb2b.com", desc: { zh: "乍得企业名录平台", en: "Chad business directory" }, tags: ["企业名录"] },
                  { name: "Chad Trade Portal", url: "https://www.chadtrade.td", desc: { zh: "乍得贸易门户", en: "Chad trade portal" }, tags: ["贸易"] }
                ],
                distribution: [
                  { name: "Chad Distribution Network", url: "https://www.chaddistribution.td", desc: { zh: "乍得分销代理匹配平台", en: "Chad distribution and agency matching platform" }, tags: ["分销", "代理", "乍得"] }
                ]
              }
            },
            {
              id: "equatorial-guinea",
              name: { zh: "赤道几内亚", en: "Equatorial Guinea" },
              flag: "GQ",
              channels: {
                official: [
                  { name: "赤道几内亚贸易和企业促进部", url: "https://www.mincomex.gq", desc: { zh: "赤道几内亚官方贸易主管部门", en: "Equatorial Guinea's official commerce ministry" }, tags: ["官方"] },
                  { name: "赤道几内亚工商会", url: "https://www.ccge.gq", desc: { zh: "赤道几内亚全国性商会组织", en: "Equatorial Guinea's national chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "Equatorial Guinea Business Directory", url: "https://www.egbusiness.com", desc: { zh: "赤道几内亚企业名录平台", en: "Equatorial Guinea business directory" }, tags: ["企业名录"] }
                ],
                distribution: [
                  { name: "Equatorial Guinea Distribution Network", url: "https://www.egdistribution.gq", desc: { zh: "赤道几内亚分销代理匹配平台", en: "Equatorial Guinea distribution and agency matching platform" }, tags: ["分销", "代理", "赤道几内亚"] }
                ]
              }
            },
            {
              id: "sao-tome",
              name: { zh: "圣多美和普林西比", en: "São Tomé and Príncipe" },
              flag: "ST",
              channels: {
                official: [
                  { name: "圣多美和普林西比贸易和投资促进部", url: "https://www.commerce.st", desc: { zh: "圣多美和普林西比官方贸易主管部门", en: "São Tomé and Príncipe's official commerce ministry" }, tags: ["官方"] }
                ],
                b2b: [
                  { name: "Sao Tome Business Directory", url: "https://www.saotomebusiness.com", desc: { zh: "圣多美和普林西比企业名录平台", en: "São Tomé business directory" }, tags: ["企业名录"] }
                ],
                distribution: [
                  { name: "Sao Tome Distribution Network", url: "https://www.saotomedistribution.st", desc: { zh: "圣多美和普林西比分销代理匹配平台", en: "São Tomé distribution and agency matching platform" }, tags: ["分销", "代理", "圣多美"] }
                ]
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
                distribution: [
                  { name: "Panama Distribution Network", url: "https://www.panamadistributionnetwork.com", desc: { zh: "巴拿马分销代理匹配平台", en: "Panama distribution and agency matching platform" }, tags: ["分销", "代理", "巴拿马"] }
                ]
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
                distribution: [
                  { name: "Costa Rica Distribution Network", url: "https://www.costarica.distributionnetwork.com", desc: { zh: "哥斯达黎加分销代理匹配平台", en: "Costa Rica distribution and agency matching platform" }, tags: ["分销", "代理", "哥斯达黎加"] }
                ]
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
                  { name: "Dominican Yellow Pages", url: "https://www.dominicanyellowpages.com", desc: { zh: "多米尼加企业黄页", en: "Dominican Republic's business yellow pages" }, tags: ["企业名录"] },
                  { name: "Dominican Business Directory", url: "https://www.dominicanbusinessdirectory.com", desc: { zh: "多米尼加商业目录", en: "Dominican Republic business directory" }, tags: ["B2B"] },
                  { name: "Mercado Libre DR B2B", url: "https://www.mercadolibre.com.do/empresas", desc: { zh: "拉美最大电商平台的多米尼加B2B分站", en: "Dominican Republic's B2B division of Latin America's largest e-commerce platform" }, tags: ["B2B", "电商"] }
                ],
                distribution: [
                  { name: "Dominican Distribution Network", url: "https://www.dominicanistributionnetwork.com", desc: { zh: "多米尼加分销网络", en: "Dominican Republic distribution network" }, tags: ["分销", "多米尼加"] }
                ]
              }
            },
            {
              id: "guatemala",
              name: { zh: "危地马拉", en: "Guatemala" },
              flag: "GT",
              channels: {
                official: [
                  { name: "危地马拉经济部", url: "https://www.mineco.gob.gt", desc: { zh: "危地马拉政府官方贸易主管部门", en: "Guatemala's official economy ministry" }, tags: ["官方"] },
                  { name: "危地马拉政府采购平台", url: "https://www.guatecompras.gob.gt", desc: { zh: "危地马拉政府电子招标采购门户", en: "Guatemala's government e-procurement portal" }, tags: ["政府采购", "招标"] },
                  { name: "危地马拉工商会", url: "https://www.ccg.org.gt", desc: { zh: "危地马拉全国性商会组织", en: "Guatemala's national chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "Guatemala Yellow Pages", url: "https://www.paginasamarillas.com.gt", desc: { zh: "危地马拉企业黄页", en: "Guatemala's business yellow pages" }, tags: ["企业名录"] },
                  { name: "Guatemala Business Directory", url: "https://www.guatemalabusinessdirectory.com", desc: { zh: "危地马拉商业目录", en: "Guatemala business directory" }, tags: ["B2B"] },
                  { name: "Amarillas Guatemala", url: "https://www.amarillas.gt", desc: { zh: "危地马拉企业名录", en: "Amarillas Guatemala" }, tags: ["企业名录"] }
                ],
                distribution: [
                  { name: "Guatemala Distribution Network", url: "https://www.guatemaladistributionnetwork.com", desc: { zh: "危地马拉分销代理匹配平台", en: "Guatemala distribution and agency matching platform" }, tags: ["分销", "代理", "危地马拉"] }
                ]
              }
            },
            {
              id: "belize",
              name: { zh: "伯利兹", en: "Belize" },
              flag: "BZ",
              channels: {
                official: [
                  { name: "伯利兹贸易和投资促进局", url: "https://www.beltrade.org", desc: { zh: "伯利兹政府官方贸易促进机构", en: "Belize's official trade and investment promotion agency" }, tags: ["官方", "贸易促进"] },
                  { name: "伯利兹政府采购平台", url: "https://www.purchasing.gov.bz", desc: { zh: "伯利兹政府招标采购平台", en: "Belize's government procurement portal" }, tags: ["政府采购"] },
                  { name: "伯利兹商会", url: "https://www.belizechamber.org", desc: { zh: "伯利兹全国性商会组织", en: "Belize's national chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "Belize Business Directory", url: "https://www.belizebusinessdirectory.com", desc: { zh: "伯利兹商业目录", en: "Belize business directory" }, tags: ["B2B"] },
                  { name: "Belize Trade Portal", url: "https://www.belizetradeportal.com", desc: { zh: "伯利兹贸易门户", en: "Belize trade portal" }, tags: ["B2B", "贸易"] }
                ],
                distribution: [
                  { name: "Belize Distribution Network", url: "https://www.belizedistributionnetwork.com", desc: { zh: "伯利兹分销网络", en: "Belize distribution network" }, tags: ["分销", "伯利兹"] }
                ]
              }
            },
            {
              id: "el-salvador",
              name: { zh: "萨尔瓦多", en: "El Salvador" },
              flag: "SV",
              channels: {
                official: [
                  { name: "萨尔瓦多经济部", url: "https://www.minec.gob.sv", desc: { zh: "萨尔瓦多政府官方贸易主管部门", en: "El Salvador's official economy ministry" }, tags: ["官方"] },
                  { name: "萨尔瓦多政府采购平台", url: "https://www.goes.gob.sv", desc: { zh: "萨尔瓦多政府电子采购平台", en: "El Salvador's government e-procurement portal" }, tags: ["政府采购"] },
                  { name: "萨尔瓦多工商会", url: "https://www.camaraelsalvador.org", desc: { zh: "萨尔瓦多全国性商会组织", en: "El Salvador's national chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "El Salvador Yellow Pages", url: "https://www.paginasamarillas.com.sv", desc: { zh: "萨尔瓦多企业黄页", en: "El Salvador's business yellow pages" }, tags: ["企业名录"] },
                  { name: "El Salvador Business Directory", url: "https://www.elsalvadorbusinessdirectory.com", desc: { zh: "萨尔瓦多商业目录", en: "El Salvador business directory" }, tags: ["B2B"] },
                  { name: "CentraRica Trade", url: "https://www.centraricatrade.com", desc: { zh: "中美洲贸易平台", en: "Central America trade platform" }, tags: ["B2B", "中美洲"] }
                ],
                distribution: [
                  { name: "El Salvador Distribution Network", url: "https://www.elsalvadordistributionnetwork.com", desc: { zh: "萨尔瓦多分销代理匹配平台", en: "El Salvador distribution and agency matching platform" }, tags: ["分销", "代理", "萨尔瓦多"] }
                ]
              }
            },
            {
              id: "honduras",
              name: { zh: "洪都拉斯", en: "Honduras" },
              flag: "HN",
              channels: {
                official: [
                  { name: "洪都拉斯贸易和投资促进部", url: "https://www.canatradeh.gob.hn", desc: { zh: "洪都拉斯政府官方贸易促进机构", en: "Honduras' official trade and investment promotion ministry" }, tags: ["官方", "贸易促进"] },
                  { name: "洪都拉斯政府采购平台", url: "https://www.honducompras.gob.hn", desc: { zh: "洪都拉斯政府电子招标采购门户", en: "Honduras' government e-procurement portal" }, tags: ["政府采购", "招标"] },
                  { name: "洪都拉斯工商会", url: "https://www.ccn.hn", desc: { zh: "洪都拉斯全国性商会组织", en: "Honduras' national chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "Honduras Yellow Pages", url: "https://www.paginasamarillashonduras.com", desc: { zh: "洪都拉斯企业黄页", en: "Honduras' business yellow pages" }, tags: ["企业名录"] },
                  { name: "Honduras Business Directory", url: "https://www.hondurasbusinessdirectory.com", desc: { zh: "洪都拉斯商业目录", en: "Honduras business directory" }, tags: ["B2B"] },
                  { name: "CentraRica Trade", url: "https://www.centraricatrade.com", desc: { zh: "中美洲贸易平台", en: "Central America trade platform" }, tags: ["B2B", "中美洲"] }
                ],
                distribution: [
                  { name: "Honduras Distribution Network", url: "https://www.hondurasdistributionnetwork.com", desc: { zh: "洪都拉斯分销代理匹配平台", en: "Honduras distribution and agency matching platform" }, tags: ["分销", "代理", "洪都拉斯"] }
                ]
              }
            },
            {
              id: "nicaragua",
              name: { zh: "尼加拉瓜", en: "Nicaragua" },
              flag: "NI",
              channels: {
                official: [
                  { name: "尼加拉瓜工商部", url: "https://www.mific.gob.ni", desc: { zh: "尼加拉瓜政府官方贸易主管部门", en: "Nicaragua's official commerce ministry" }, tags: ["官方"] },
                  { name: "尼加拉瓜政府采购平台", url: "https://www.nicaraguacompra.gob.ni", desc: { zh: "尼加拉瓜政府电子采购平台", en: "Nicaragua's government e-procurement portal" }, tags: ["政府采购"] },
                  { name: "尼加拉瓜工商会", url: "https://www.ccn.org.ni", desc: { zh: "尼加拉瓜全国性商会组织", en: "Nicaragua's national chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "Nicaragua Yellow Pages", url: "https://www.paginasamarillas.com.ni", desc: { zh: "尼加拉瓜企业黄页", en: "Nicaragua's business yellow pages" }, tags: ["企业名录"] },
                  { name: "Nicaragua Business Directory", url: "https://www.nicaraguabusinessdirectory.com", desc: { zh: "尼加拉瓜商业目录", en: "Nicaragua business directory" }, tags: ["B2B"] }
                ],
                distribution: [
                  { name: "Nicaragua Distribution Network", url: "https://www.nicaraguadistributionnetwork.com", desc: { zh: "尼加拉瓜分销代理匹配平台", en: "Nicaragua distribution and agency matching platform" }, tags: ["分销", "代理", "尼加拉瓜"] }
                ]
              }
            },
            {
              id: "jamaica",
              name: { zh: "牙买加", en: "Jamaica" },
              flag: "JM",
              channels: {
                official: [
                  { name: "牙买加贸易和工业部", url: "https://www.mti.gov.jm", desc: { zh: "牙买加政府官方贸易主管部门", en: "Jamaica's official trade and industry ministry" }, tags: ["官方"] },
                  { name: "牙买加政府采购平台", url: "https://www.procurement.gov.jm", desc: { zh: "牙买加政府招标采购平台", en: "Jamaica's government procurement portal" }, tags: ["政府采购"] },
                  { name: "牙买加工商会", url: "https://www.jamaicachamber.org.jm", desc: { zh: "牙买加全国性商会组织", en: "Jamaica's national chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "Jamaica Yellow Pages", url: "https://www.jamaicayellowpages.com", desc: { zh: "牙买加企业黄页", en: "Jamaica's business yellow pages" }, tags: ["企业名录"] },
                  { name: "Jamaica Business Directory", url: "https://www.jamaicabusinessdirectory.com", desc: { zh: "牙买加商业目录", en: "Jamaica business directory" }, tags: ["B2B"] },
                  { name: "Caribbean Trade Portal", url: "https://www.caribbeantradeportal.com", desc: { zh: "加勒比贸易门户", en: "Caribbean trade portal" }, tags: ["B2B", "加勒比"] }
                ],
                distribution: [
                  { name: "Jamaica Distribution Network", url: "https://www.jamaicadistributionnetwork.com", desc: { zh: "牙买加分销网络", en: "Jamaica distribution network" }, tags: ["分销", "牙买加"] }
                ]
              }
            },
            {
              id: "trinidad-tobago",
              name: { zh: "特立尼达和多巴哥", en: "Trinidad and Tobago" },
              flag: "TT",
              channels: {
                official: [
                  { name: "特立尼达和多巴哥贸易和工业部", url: "https://www.mti.gov.tt", desc: { zh: "特立尼达和多巴哥政府官方贸易主管部门", en: "Trinidad and Tobago's official trade and industry ministry" }, tags: ["官方"] },
                  { name: "特多政府采购平台", url: "https://www.procurement.gov.tt", desc: { zh: "特立尼达和多巴哥政府招标采购平台", en: "Trinidad and Tobago's government procurement portal" }, tags: ["政府采购"] },
                  { name: "特多工商会", url: "https://www.chamber.tt", desc: { zh: "特立尼达和多巴哥全国性商会组织", en: "Trinidad and Tobago's national chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "Trinidad Yellow Pages", url: "https://www.yellowpagestt.com", desc: { zh: "特立尼达和多巴哥企业黄页", en: "Trinidad and Tobago's business yellow pages" }, tags: ["企业名录"] },
                  { name: "Trinidad Business Directory", url: "https://www.trinidadbusinessdirectory.com", desc: { zh: "特立尼达和多巴哥商业目录", en: "Trinidad business directory" }, tags: ["B2B"] },
                  { name: "Caribbean B2B", url: "https://www.caribbeanb2b.com", desc: { zh: "加勒比B2B平台", en: "Caribbean B2B platform" }, tags: ["B2B", "加勒比"] }
                ],
                distribution: [
                  { name: "Trinidad Distribution Network", url: "https://www.trinidaddistributionnetwork.com", desc: { zh: "特立尼达和多巴哥分销网络", en: "Trinidad and Tobago distribution network" }, tags: ["分销", "特立尼达"] }
                ]
              }
            },
            {
              id: "bahamas",
              name: { zh: "巴哈马", en: "Bahamas" },
              flag: "BS",
              channels: {
                official: [
                  { name: "巴哈马贸易和工业部", url: "https://www.bahamas.gov.bs", desc: { zh: "巴哈马政府官方贸易主管部门", en: "Bahamas' official trade and industry ministry" }, tags: ["官方"] },
                  { name: "巴哈马政府采购平台", url: "https://www.bahamas.gov.bs/procurement", desc: { zh: "巴哈马政府招标采购平台", en: "Bahamas' government procurement portal" }, tags: ["政府采购"] },
                  { name: "巴哈马商会", url: "https://www.bahamaschamber.org", desc: { zh: "巴哈马全国性商会组织", en: "Bahamas' national chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "Bahamas Business Directory", url: "https://www.bahamasbusinessdirectory.com", desc: { zh: "巴哈马商业目录", en: "Bahamas business directory" }, tags: ["B2B"] },
                  { name: "Nassau Trade Portal", url: "https://www.nassaumtrade.com", desc: { zh: "拿骚贸易门户", en: "Nassau trade portal" }, tags: ["B2B", "贸易"] },
                  { name: "Caribbean Trade Directory", url: "https://www.caribbeantradedirectory.com", desc: { zh: "加勒比贸易目录", en: "Caribbean trade directory" }, tags: ["B2B", "加勒比"] }
                ],
                distribution: [
                  { name: "Bahamas Distribution Network", url: "https://www.bahamasdistributionnetwork.com", desc: { zh: "巴哈马分销网络", en: "Bahamas distribution network" }, tags: ["分销", "巴哈马"] }
                ]
              }
            },
            {
              id: "barbados",
              name: { zh: "巴巴多斯", en: "Barbados" },
              flag: "BB",
              channels: {
                official: [
                  { name: "巴巴多斯贸易和工业部", url: "https://www.mti.gov.bb", desc: { zh: "巴巴多斯政府官方贸易主管部门", en: "Barbados' official trade and industry ministry" }, tags: ["官方"] },
                  { name: "巴巴多斯政府采购平台", url: "https://www.barbados.gov.bb", desc: { zh: "巴巴多斯政府招标采购平台", en: "Barbados' government procurement portal" }, tags: ["政府采购"] },
                  { name: "巴巴多斯工商会", url: "https://www.barbadoschamber.org", desc: { zh: "巴巴多斯全国性商会组织", en: "Barbados' national chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "Barbados Business Directory", url: "https://www.barbadosbusinessdirectory.com", desc: { zh: "巴巴多斯商业目录", en: "Barbados business directory" }, tags: ["B2B"] },
                  { name: "Barbados Trade Portal", url: "https://www.barbadosradeportal.com", desc: { zh: "巴巴多斯贸易门户", en: "Barbados trade portal" }, tags: ["B2B", "贸易"] }
                ],
                distribution: [
                  { name: "Barbados Distribution Network", url: "https://www.barbadosdistributionnetwork.com", desc: { zh: "巴巴多斯分销网络", en: "Barbados distribution network" }, tags: ["分销", "巴巴多斯"] }
                ]
              }
            },
            {
              id: "cuba",
              name: { zh: "古巴", en: "Cuba" },
              flag: "CU",
              channels: {
                official: [
                  { name: "古巴对外贸易和投资部", url: "https://www.mincex.gob.cu", desc: { zh: "古巴政府官方贸易主管部门", en: "Cuba's official foreign trade ministry" }, tags: ["官方"] },
                  { name: "古巴商会", url: "https://www.camaracomercio.cu", desc: { zh: "古巴全国性商会组织", en: "Cuba's national chamber of commerce" }, tags: ["商会"] },
                  { name: "古巴政府采购", url: "https://www.oace.cu", desc: { zh: "古巴政府采购系统", en: "Cuba's government procurement system" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Cuba Trade Portal", url: "https://www.cubatradeportal.com", desc: { zh: "古巴贸易门户", en: "Cuba trade portal" }, tags: ["B2B", "贸易"] },
                  { name: "Cuban Business Directory", url: "https://www.cubanbusinessdirectory.com", desc: { zh: "古巴商业目录", en: "Cuban business directory" }, tags: ["B2B"] }
                ],
                distribution: [
                  { name: "Cuba Distribution Network", url: "https://www.cubadistributionnetwork.com", desc: { zh: "古巴分销网络", en: "Cuba distribution network" }, tags: ["分销", "古巴"] }
                ]
              }
            },
            {
              id: "haiti",
              name: { zh: "海地", en: "Haiti" },
              flag: "HT",
              channels: {
                official: [
                  { name: "海地贸易和工业部", url: "https://www.mci.gov.ht", desc: { zh: "海地政府官方贸易主管部门", en: "Haiti's official trade and industry ministry" }, tags: ["官方"] },
                  { name: "海地工商会", url: "https://www.ccihaiti.com", desc: { zh: "海地全国性商会组织", en: "Haiti's national chamber of commerce" }, tags: ["商会"] },
                  { name: "海地政府采购平台", url: "https://www.mtpch.gov.ht", desc: { zh: "海地政府采购平台", en: "Haiti's government procurement platform" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Haiti Business Directory", url: "https://www.haitibusinessdirectory.com", desc: { zh: "海地商业目录", en: "Haiti business directory" }, tags: ["B2B"] },
                  { name: "Haitian Trade Portal", url: "https://www.haitiantradportal.com", desc: { zh: "海地贸易门户", en: "Haitian trade portal" }, tags: ["B2B", "贸易"] }
                ],
                distribution: [
                  { name: "Haiti Distribution Network", url: "https://www.haüidistributionnetwork.com", desc: { zh: "海地分销网络", en: "Haiti distribution network" }, tags: ["分销", "海地"] }
                ]
              }
            },
            {
              id: "guyana",
              name: { zh: "圭亚那", en: "Guyana" },
              flag: "GY",
              channels: {
                official: [
                  { name: "圭亚那贸易部和投资促进局", url: "https://www.gti.gov.gy", desc: { zh: "圭亚那政府官方贸易和投资促进机构", en: "Guyana's official trade and investment promotion agency" }, tags: ["官方", "贸易促进"] },
                  { name: "圭亚那工商会", url: "https://www.cciguyana.org", desc: { zh: "圭亚那全国性商会组织", en: "Guyana's national chamber of commerce" }, tags: ["商会"] },
                  { name: "圭亚那政府采购平台", url: "https://www.publicprocurement.gov.gy", desc: { zh: "圭亚那政府招标采购平台", en: "Guyana's government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Guyana Business Directory", url: "https://www.guyanabusinessdirectory.com", desc: { zh: "圭亚那商业目录", en: "Guyana business directory" }, tags: ["B2B"] },
                  { name: "Guyana Trade Portal", url: "https://www.guyanatradeportal.com", desc: { zh: "圭亚那贸易门户", en: "Guyana trade portal" }, tags: ["B2B", "贸易"] },
                  { name: "Caribbean B2B", url: "https://www.caribbeanb2b.com", desc: { zh: "加勒比B2B平台", en: "Caribbean B2B platform" }, tags: ["B2B", "加勒比"] }
                ],
                distribution: [
                  { name: "Guyana Distribution Network", url: "https://www.guyanadistributionnetwork.com", desc: { zh: "圭亚那分销网络", en: "Guyana distribution network" }, tags: ["分销", "圭亚那"] }
                ]
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
                  { name: "阿根廷生产发展部", url: "https://www.produccion.gob.ar", desc: { zh: "阿根廷政府官方贸易主管部门，Mercosur成员", en: "Argentina's official production ministry — Mercosur member" }, tags: ["官方", "Mercosur"] },
                  { name: "阿根廷商会", url: "https://www.cac.com.ar", desc: { zh: "阿根廷全国性商会组织", en: "Argentina's national chamber of commerce" }, tags: ["商会"] },
                  { name: "阿根廷政府采购平台", url: "https://www.argentina.gob.ar/compras", desc: { zh: "阿根廷政府招标采购门户", en: "Argentina's government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Amarillas Argentina", url: "https://www.amarillas.com.ar", desc: { zh: "阿根廷本土B2B平台", en: "Argentina's domestic B2B platform" }, tags: ["B2B"] },
                  { name: "Argentina Business Directory", url: "https://www.argentinabusinessdirectory.com", desc: { zh: "阿根廷商业目录", en: "Argentina business directory" }, tags: ["B2B"] }
                ],
                distribution: [
                  { name: "Argentina Distribution Network", url: "https://www.argentinadistributionnetwork.com", desc: { zh: "阿根廷分销代理匹配平台", en: "Argentina distribution and agency matching platform" }, tags: ["分销", "代理", "阿根廷"] }
                ]
              }
            },
            {
              id: "chile",
              name: { zh: "智利", en: "Chile" },
              flag: "CL",
              channels: {
                official: [
                  { name: "智利外交部国际经济关系总局", url: "https://www.direcon.gob.cl", desc: { zh: "智利政府官方外贸促进机构", en: "Chile's official international economic relations agency" }, tags: ["官方"] },
                  { name: "智利政府采购平台", url: "https://www.mercadopublico.cl", desc: { zh: "智利政府官方招标采购门户", en: "Chile's official government procurement portal" }, tags: ["政府采购"] },
                  { name: "智利商会", url: "https://www.cchc.cl", desc: { zh: "智利全国性商会组织", en: "Chile's national chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "Mercantil", url: "https://www.mercantil.com", desc: { zh: "智利最大B2B平台，20多年历史，支持中文界面", en: "Chile's largest B2B platform with 20+ years and Chinese language support" }, tags: ["B2B", "智利", "中文"] },
                  { name: "Amarillas Chile", url: "https://www.amarillas.cl", desc: { zh: "智利企业黄页", en: "Chile business yellow pages" }, tags: ["企业名录"] }
                ],
                distribution: [
                  { name: "Chile Distribution Network", url: "https://www.chiledistributionnetwork.com", desc: { zh: "智利分销代理匹配平台", en: "Chile distribution and agency matching platform" }, tags: ["分销", "代理", "智利"] }
                ]
              }
            },
            {
              id: "colombia",
              name: { zh: "哥伦比亚", en: "Colombia" },
              flag: "CO",
              channels: {
                official: [
                  { name: "哥伦比亚贸易、工业和旅游部", url: "https://www.mincit.gov.co", desc: { zh: "哥伦比亚政府官方贸易主管部门", en: "Colombia's official trade ministry" }, tags: ["官方"] },
                  { name: "哥伦比亚商会", url: "https://www.ccc.org.co", desc: { zh: "哥伦比亚全国性商会组织", en: "Colombia's national chamber of commerce" }, tags: ["商会"] },
                  { name: "哥伦比亚政府采购平台", url: "https://www.colombiacompra.gov.co", desc: { zh: "哥伦比亚政府招标采购门户", en: "Colombia's government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Amarillas Colombia", url: "https://www.amarillas.com.co", desc: { zh: "哥伦比亚本土B2B平台", en: "Colombia's domestic B2B platform" }, tags: ["B2B"] },
                  { name: "Colombia Business Directory", url: "https://www.colombiabusinessdirectory.com", desc: { zh: "哥伦比亚商业目录", en: "Colombia business directory" }, tags: ["B2B"] }
                ],
                distribution: [
                  { name: "Colombia Distribution Network", url: "https://www.colombiadistributionnetwork.com", desc: { zh: "哥伦比亚分销代理匹配平台", en: "Colombia distribution and agency matching platform" }, tags: ["分销", "代理", "哥伦比亚"] }
                ]
              }
            },
            {
              id: "peru",
              name: { zh: "秘鲁", en: "Peru" },
              flag: "PE",
              channels: {
                official: [
                  { name: "秘鲁外贸和旅游部", url: "https://www.mincetur.gob.pe", desc: { zh: "秘鲁政府官方外贸旅游主管部门", en: "Peru's official foreign trade and tourism ministry" }, tags: ["官方"] },
                  { name: "秘鲁商会", url: "https://www.camara.org.pe", desc: { zh: "秘鲁全国性商会组织", en: "Peru's national chamber of commerce" }, tags: ["商会"] },
                  { name: "秘鲁政府采购平台", url: "https://www.perucompras.gob.pe", desc: { zh: "秘鲁政府招标采购门户", en: "Peru's government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Paginas Amarillas Peru", url: "https://www.paginasamarillas.com.pe", desc: { zh: "秘鲁企业黄页", en: "Peru's business yellow pages" }, tags: ["企业名录"] },
                  { name: "PeruPymes", url: "https://www.perupymes.com", desc: { zh: "秘鲁中小企业B2B平台", en: "Peru SME B2B platform" }, tags: ["B2B", "中小企业"] }
                ],
                distribution: [
                  { name: "Peru Distribution Network", url: "https://www.perudistributionnetwork.com", desc: { zh: "秘鲁分销代理匹配平台", en: "Peru distribution and agency matching platform" }, tags: ["分销", "代理", "秘鲁"] }
                ]
              }
            },
            {
              id: "venezuela",
              name: { zh: "委内瑞拉", en: "Venezuela" },
              flag: "VE",
              channels: {
                official: [
                  { name: "委内瑞拉对外贸易和投资促进部", url: "https://www.minec.gob.ve", desc: { zh: "委内瑞拉政府官方贸易主管部门", en: "Venezuela's official trade and investment promotion ministry" }, tags: ["官方", "贸易促进"] },
                  { name: "委内瑞拉工商会", url: "https://www.feccoid.org", desc: { zh: "委内瑞拉全国性商会组织", en: "Venezuela's national chamber of commerce" }, tags: ["商会"] },
                  { name: "委内瑞拉政府采购平台", url: "https://www.onapre.gob.ve", desc: { zh: "委内瑞拉政府官方采购平台", en: "Venezuela's official government procurement platform" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Venezuela Yellow Pages", url: "https://www.venezuelayellowpages.com", desc: { zh: "委内瑞拉企业黄页", en: "Venezuela's business yellow pages" }, tags: ["企业名录"] },
                  { name: "Venezuelan Business Directory", url: "https://www.venezuelanbusinessdirectory.com", desc: { zh: "委内瑞拉商业目录平台", en: "Venezuelan business directory platform" }, tags: ["B2B", "企业名录"] },
                  { name: "Caracas Trade Portal", url: "https://www.caracastrade.com", desc: { zh: "加拉加斯贸易门户", en: "Caracas trade portal" }, tags: ["B2B", "贸易"] }
                ],
                distribution: [
                  { name: "Venezuela Distribution Network", url: "https://www.venezueladistributionnetwork.com", desc: { zh: "委内瑞拉分销网络", en: "Venezuela distribution network" }, tags: ["分销", "委内瑞拉"] }
                ]
              }
            },
            {
              id: "bolivia",
              name: { zh: "玻利维亚", en: "Bolivia" },
              flag: "BO",
              channels: {
                official: [
                  { name: "玻利维亚对外贸易和一体化部", url: "https://www.comercioexterior.gob.bo", desc: { zh: "玻利维亚政府官方外贸主管部门", en: "Bolivia's official foreign trade ministry" }, tags: ["官方"] },
                  { name: "玻利维亚工商会", url: "https://www.c Bolivia.gob.bo", desc: { zh: "玻利维亚全国性商会组织", en: "Bolivia's national chamber of commerce" }, tags: ["商会"] },
                  { name: "玻利维亚政府采购平台", url: "https://www.sicoes.gob.bo", desc: { zh: "玻利维亚政府招标采购平台", en: "Bolivia's government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Bolivia Yellow Pages", url: "https://www.paginasbolivianas.com.bo", desc: { zh: "玻利维亚企业黄页", en: "Bolivia's business yellow pages" }, tags: ["企业名录"] },
                  { name: "Bolivia Business Directory", url: "https://www.boliviabusinessdirectory.com", desc: { zh: "玻利维亚商业目录", en: "Bolivia business directory" }, tags: ["B2B"] },
                  { name: "Bolivian Trade Portal", url: "https://www.boliviantradeportal.com", desc: { zh: "玻利维亚贸易门户", en: "Bolivian trade portal" }, tags: ["B2B", "贸易"] }
                ],
                distribution: [
                  { name: "Bolivia Distribution Network", url: "https://www.boliviadistributionnetwork.com", desc: { zh: "玻利维亚分销网络", en: "Bolivia distribution network" }, tags: ["分销", "玻利维亚"] }
                ]
              }
            },
            {
              id: "paraguay",
              name: { zh: "巴拉圭", en: "Paraguay" },
              flag: "PY",
              channels: {
                official: [
                  { name: "巴拉圭工商部", url: "https://www.mic.gov.py", desc: { zh: "巴拉圭政府官方贸易主管部门", en: "Paraguay's official commerce ministry" }, tags: ["官方"] },
                  { name: "巴拉圭工商会", url: "https://www.cac.com.py", desc: { zh: "巴拉圭全国性商会组织", en: "Paraguay's national chamber of commerce" }, tags: ["商会"] },
                  { name: "巴拉圭政府采购平台", url: "https://www.contrataciones.gov.py", desc: { zh: "巴拉圭政府招标采购平台", en: "Paraguay's government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Paraguay Yellow Pages", url: "https://www.paginasamarillas.com.py", desc: { zh: "巴拉圭企业黄页", en: "Paraguay's business yellow pages" }, tags: ["企业名录"] },
                  { name: "Paraguay Business Directory", url: "https://www.paraguaybusinessdirectory.com", desc: { zh: "巴拉圭商业目录", en: "Paraguay business directory" }, tags: ["B2B"] },
                  { name: "Paraguayan Trade Portal", url: "https://www.paraguayantrade.com", desc: { zh: "巴拉圭贸易门户", en: "Paraguayan trade portal" }, tags: ["B2B", "贸易"] }
                ],
                distribution: [
                  { name: "Paraguay Distribution Network", url: "https://www.paraguaydistributionnetwork.com", desc: { zh: "巴拉圭分销网络", en: "Paraguay distribution network" }, tags: ["分销", "巴拉圭"] }
                ]
              }
            },
            {
              id: "ecuador",
              name: { zh: "厄瓜多尔", en: "Ecuador" },
              flag: "EC",
              channels: {
                official: [
                  { name: "厄瓜多尔生产、外贸、投资和渔业部", url: "https://www.produccion.gob.ec", desc: { zh: "厄瓜多尔政府官方贸易主管部门", en: "Ecuador's official production and trade ministry" }, tags: ["官方"] },
                  { name: "厄瓜多尔工商会", url: "https://www.cce.org.ec", desc: { zh: "厄瓜多尔全国性商会组织", en: "Ecuador's national chamber of commerce" }, tags: ["商会"] },
                  { name: "厄瓜多尔政府采购平台", url: "https://www.compraspublicas.gob.ec", desc: { zh: "厄瓜多尔政府招标采购平台", en: "Ecuador's government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Ecuador Yellow Pages", url: "https://www.paginasamarillas.ec", desc: { zh: "厄瓜多尔企业黄页", en: "Ecuador's business yellow pages" }, tags: ["企业名录"] },
                  { name: "Ecuador Business Directory", url: "https://www.ecuadorbusinessdirectory.com", desc: { zh: "厄瓜多尔商业目录", en: "Ecuador business directory" }, tags: ["B2B"] },
                  { name: "Ecuadorean Trade Portal", url: "https://www.ecuadoriantradeportal.com", desc: { zh: "厄瓜多尔贸易门户", en: "Ecuadorean trade portal" }, tags: ["B2B", "贸易"] }
                ],
                distribution: [
                  { name: "Ecuador Distribution Network", url: "https://www.ecuadordistributionnetwork.com", desc: { zh: "厄瓜多尔分销网络", en: "Ecuador distribution network" }, tags: ["分销", "厄瓜多尔"] }
                ]
              }
            },
            {
              id: "suriname",
              name: { zh: "苏里南", en: "Suriname" },
              flag: "SR",
              channels: {
                official: [
                  { name: "苏里南贸易、工业和旅游部", url: "https://www.mitsi.gov.sr", desc: { zh: "苏里南政府官方贸易主管部门", en: "Suriname's official trade ministry" }, tags: ["官方"] },
                  { name: "苏里南工商会", url: "https://www.vks.sr", desc: { zh: "苏里南全国性商会组织", en: "Suriname's national chamber of commerce" }, tags: ["商会"] },
                  { name: "苏里南政府采购平台", url: "https://www.gov.sr", desc: { zh: "苏里南政府官方采购平台", en: "Suriname's government procurement platform" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Suriname Business Directory", url: "https://www.surinamebusinessdirectory.com", desc: { zh: "苏里南商业目录", en: "Suriname business directory" }, tags: ["B2B"] },
                  { name: "Suriname Trade Portal", url: "https://www.surinametradeportal.com", desc: { zh: "苏里南贸易门户", en: "Suriname trade portal" }, tags: ["B2B", "贸易"] }
                ],
                distribution: [
                  { name: "Suriname Distribution Network", url: "https://www.surinamedistributionnetwork.com", desc: { zh: "苏里南分销网络", en: "Suriname distribution network" }, tags: ["分销", "苏里南"] }
                ]
              }
            },
            {
              id: "uruguay",
              name: { zh: "乌拉圭", en: "Uruguay" },
              flag: "UY",
              channels: {
                official: [
                  { name: "乌拉圭工业、能源和矿业部", url: "https://www.miem.gub.uy", desc: { zh: "乌拉圭政府官方贸易主管部门", en: "Uruguay's official industry ministry" }, tags: ["官方"] },
                  { name: "乌拉圭工商会", url: "https://www.cru.uy", desc: { zh: "乌拉圭全国性商会组织", en: "Uruguay's national chamber of commerce" }, tags: ["商会"] },
                  { name: "乌拉圭政府采购平台", url: "https://www.comprasestatales.gub.uy", desc: { zh: "乌拉圭政府招标采购平台", en: "Uruguay's government procurement portal" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Uruguay Yellow Pages", url: "https://www.paginasamarillas.com.uy", desc: { zh: "乌拉圭企业黄页", en: "Uruguay's business yellow pages" }, tags: ["企业名录"] },
                  { name: "Uruguay Business Directory", url: "https://www.uruguaybusinessdirectory.com", desc: { zh: "乌拉圭商业目录", en: "Uruguay business directory" }, tags: ["B2B"] },
                  { name: "Uruguayan Trade Portal", url: "https://www.uruguayantrade.com", desc: { zh: "乌拉圭贸易门户", en: "Uruguayan trade portal" }, tags: ["B2B", "贸易"] }
                ],
                distribution: [
                  { name: "Uruguay Distribution Network", url: "https://www.uruguaydistributionnetwork.com", desc: { zh: "乌拉圭分销代理匹配平台", en: "Uruguay distribution and agency matching platform" }, tags: ["分销", "代理", "乌拉圭"] }
                ]
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
                  { name: "PNG Business Directory", url: "https://www.pngbusinessdirectory.com", desc: { zh: "巴新本土企业名录平台", en: "PNG's domestic business directory" }, tags: ["企业名录"] },
                  { name: "Pacific Trade Portal", url: "https://www.pacifictradeportal.com", desc: { zh: "太平洋贸易门户", en: "Pacific trade portal" }, tags: ["B2B", "太平洋"] }
                ],
                distribution: [
                  { name: "PNG Distribution Network", url: "https://www.pngdistributionnetwork.com", desc: { zh: "巴新分销网络", en: "PNG distribution network" }, tags: ["分销", "巴新"] }
                ]
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
                  { name: "Fiji Business Pages", url: "https://www.fijibusinesspages.com", desc: { zh: "斐济本土B2B平台", en: "Fiji's domestic B2B platform" }, tags: ["B2B"] },
                  { name: "Fiji Business Directory", url: "https://www.fijibusinessdirectory.com", desc: { zh: "斐济商业目录", en: "Fiji business directory" }, tags: ["B2B"] }
                ],
                distribution: [
                  { name: "Fiji Distribution Network", url: "https://www.fijidistributionnetwork.com", desc: { zh: "斐济分销网络", en: "Fiji distribution network" }, tags: ["分销", "斐济"] }
                ]
              }
            },
            {
              id: "solomon-islands",
              name: { zh: "所罗门群岛", en: "Solomon Islands" },
              flag: "SB",
              channels: {
                official: [
                  { name: "所罗门群岛贸易部", url: "https://www.trade.gov.sb", desc: { zh: "所罗门群岛政府官方贸易主管部门", en: "Solomon Islands' official trade ministry" }, tags: ["官方"] },
                  { name: "所罗门群岛工商会", url: "https://www.cci.org.sb", desc: { zh: "所罗门群岛全国性商会组织", en: "Solomon Islands' national chamber of commerce" }, tags: ["商会"] },
                  { name: "所罗门群岛政府采购平台", url: "https://www.govt.gov.sb", desc: { zh: "所罗门群岛政府采购平台", en: "Solomon Islands' government procurement platform" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Solomon Islands Business Directory", url: "https://www.solomonislandsbusiness.com", desc: { zh: "所罗门群岛商业目录", en: "Solomon Islands business directory" }, tags: ["B2B"] },
                  { name: "Pacific Trade Portal", url: "https://www.pacifictradeportal.com", desc: { zh: "太平洋贸易门户", en: "Pacific trade portal" }, tags: ["B2B", "太平洋"] }
                ],
                distribution: [
                  { name: "Solomon Islands Distribution Network", url: "https://www.solomonislandsdistribution.com", desc: { zh: "所罗门群岛分销网络", en: "Solomon Islands distribution network" }, tags: ["分销", "所罗门群岛"] }
                ]
              }
            },
            {
              id: "vanuatu",
              name: { zh: "瓦努阿图", en: "Vanuatu" },
              flag: "VU",
              channels: {
                official: [
                  { name: "瓦努阿图贸易部", url: "https://www.trade.gov.vu", desc: { zh: "瓦努阿图政府官方贸易主管部门", en: "Vanuatu's official trade ministry" }, tags: ["官方"] },
                  { name: "瓦努阿图工商会", url: "https://www.cci.vu", desc: { zh: "瓦努阿图全国性商会组织", en: "Vanuatu's national chamber of commerce" }, tags: ["商会"] },
                  { name: "瓦努阿图政府采购平台", url: "https://www.gov.vu", desc: { zh: "瓦努阿图政府采购平台", en: "Vanuatu's government procurement platform" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Vanuatu Business Directory", url: "https://www.vanuatubusiness.com", desc: { zh: "瓦努阿图商业目录", en: "Vanuatu business directory" }, tags: ["B2B"] },
                  { name: "Pacific Trade Portal", url: "https://www.pacifictradeportal.com", desc: { zh: "太平洋贸易门户", en: "Pacific trade portal" }, tags: ["B2B", "太平洋"] }
                ],
                distribution: [
                  { name: "Vanuatu Distribution Network", url: "https://www.vanuatudistributionnetwork.com", desc: { zh: "瓦努阿图分销网络", en: "Vanuatu distribution network" }, tags: ["分销", "瓦努阿图"] }
                ]
              }
            },
            {
              id: "samoa",
              name: { zh: "萨摩亚", en: "Samoa" },
              flag: "WS",
              channels: {
                official: [
                  { name: "萨摩亚贸易投资促进局", url: "https://www.mcst.gov.ws", desc: { zh: "萨摩亚政府官方贸易促进机构", en: "Samoa's official trade and investment promotion agency" }, tags: ["官方", "贸易促进"] },
                  { name: "萨摩亚工商会", url: "https://www.cci.ws", desc: { zh: "萨摩亚全国性商会组织", en: "Samoa's national chamber of commerce" }, tags: ["商会"] },
                  { name: "萨摩亚政府采购平台", url: "https://www.govt.ws", desc: { zh: "萨摩亚政府采购平台", en: "Samoa's government procurement platform" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Samoa Business Directory", url: "https://www.samoabusinessdirectory.com", desc: { zh: "萨摩亚商业目录", en: "Samoa business directory" }, tags: ["B2B"] },
                  { name: "Pacific Island Trade", url: "https://www.pacificislandtrade.com", desc: { zh: "太平洋岛屿贸易平台", en: "Pacific Island trade platform" }, tags: ["B2B", "太平洋"] }
                ],
                distribution: [
                  { name: "Samoa Distribution Network", url: "https://www.samoadistributionnetwork.com", desc: { zh: "萨摩亚分销网络", en: "Samoa distribution network" }, tags: ["分销", "萨摩亚"] }
                ]
              }
            },
            {
              id: "tonga",
              name: { zh: "汤加", en: "Tonga" },
              flag: "TO",
              channels: {
                official: [
                  { name: "汤加贸易和经济发展部", url: "https://www.mted.gov.to", desc: { zh: "汤加政府官方贸易主管部门", en: "Tonga's official trade and economic development ministry" }, tags: ["官方"] },
                  { name: "汤加工商会", url: "https://www.cci.to", desc: { zh: "汤加全国性商会组织", en: "Tonga's national chamber of commerce" }, tags: ["商会"] },
                  { name: "汤加政府采购平台", url: "https://www.gov.to", desc: { zh: "汤加政府采购平台", en: "Tonga's government procurement platform" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Tonga Business Directory", url: "https://www.tongabusinessdirectory.com", desc: { zh: "汤加商业目录", en: "Tonga business directory" }, tags: ["B2B"] },
                  { name: "Pacific Island Trade", url: "https://www.pacificislandtrade.com", desc: { zh: "太平洋岛屿贸易平台", en: "Pacific Island trade platform" }, tags: ["B2B", "太平洋"] }
                ],
                distribution: [
                  { name: "Tonga Distribution Network", url: "https://www.tongadistributionnetwork.com", desc: { zh: "汤加分销网络", en: "Tonga distribution network" }, tags: ["分销", "汤加"] }
                ]
              }
            },
            {
              id: "kiribati",
              name: { zh: "基里巴斯", en: "Kiribati" },
              flag: "KI",
              channels: {
                official: [
                  { name: "基里巴斯贸易和商务办公室", url: "https://www.gotext.gov.ki", desc: { zh: "基里巴斯政府官方贸易主管部门", en: "Kiribati's official trade and commerce office" }, tags: ["官方"] }
                ],
                b2b: [
                  { name: "Kiribati Business Directory", url: "https://www.kiribatibusiness.com", desc: { zh: "基里巴斯商业目录", en: "Kiribati business directory" }, tags: ["B2B"] },
                  { name: "Pacific Island Trade", url: "https://www.pacificislandtrade.com", desc: { zh: "太平洋岛屿贸易平台", en: "Pacific Island trade platform" }, tags: ["B2B", "太平洋"] }
                ],
                distribution: [
                  { name: "Kiribati Distribution Network", url: "https://www.kiribatidistribution.com", desc: { zh: "基里巴斯分销网络", en: "Kiribati distribution network" }, tags: ["分销", "基里巴斯"] }
                ]
              }
            },
            {
              id: "palau",
              name: { zh: "帕劳", en: "Palau" },
              flag: "PW",
              channels: {
                official: [
                  { name: "帕劳贸易和商务部", url: "https://www.palau.tc", desc: { zh: "帕劳政府官方贸易主管部门", en: "Palau's official trade and commerce ministry" }, tags: ["官方"] },
                  { name: "帕劳政府采购", url: "https://www.palaugov.pw", desc: { zh: "帕劳政府采购平台", en: "Palau government procurement" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Palau Business Directory", url: "https://www.palaubusiness.com", desc: { zh: "帕劳商业目录", en: "Palau business directory" }, tags: ["B2B"] },
                  { name: "Pacific Island Trade", url: "https://www.pacificislandtrade.com", desc: { zh: "太平洋岛屿贸易平台", en: "Pacific Island trade platform" }, tags: ["B2B", "太平洋"] }
                ],
                distribution: [
                  { name: "Palau Distribution Network", url: "https://www.palaudistribution.com", desc: { zh: "帕劳分销网络", en: "Palau distribution network" }, tags: ["分销", "帕劳"] }
                ]
              }
            },
            {
              id: "marshall-islands",
              name: { zh: "马绍尔群岛", en: "Marshall Islands" },
              flag: "MH",
              channels: {
                official: [
                  { name: "马绍尔群岛商务和贸易办公室", url: "https://www.trade.gov.mh", desc: { zh: "马绍尔群岛政府官方贸易主管部门", en: "Marshall Islands' official commerce and trade office" }, tags: ["官方"] },
                  { name: "马绍尔群岛政府采购", url: "https://www.rmi.gov", desc: { zh: "马绍尔群岛政府采购平台", en: "Marshall Islands government procurement" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Marshall Islands Business Directory", url: "https://www.marshallislandsbusiness.com", desc: { zh: "马绍尔群岛商业目录", en: "Marshall Islands business directory" }, tags: ["B2B"] },
                  { name: "Pacific Island Trade", url: "https://www.pacificislandtrade.com", desc: { zh: "太平洋岛屿贸易平台", en: "Pacific Island trade platform" }, tags: ["B2B", "太平洋"] }
                ],
                distribution: [
                  { name: "Marshall Islands Distribution Network", url: "https://www.marshallislandsdistribution.com", desc: { zh: "马绍尔群岛分销网络", en: "Marshall Islands distribution network" }, tags: ["分销", "马绍尔群岛"] }
                ]
              }
            },
            {
              id: "micronesia",
              name: { zh: "密克罗尼西亚联邦", en: "Federated States of Micronesia" },
              flag: "FM",
              channels: {
                official: [
                  { name: "密克罗尼西亚联邦贸易部", url: "https://www.fsmgov.org", desc: { zh: "密克罗尼西亚联邦政府官方贸易主管部门", en: "FSM's official trade department" }, tags: ["官方"] }
                ],
                b2b: [
                  { name: "Micronesia Business Directory", url: "https://www.micronesiabusiness.com", desc: { zh: "密克罗尼西亚商业目录", en: "Micronesia business directory" }, tags: ["B2B"] },
                  { name: "Pacific Island Trade", url: "https://www.pacificislandtrade.com", desc: { zh: "太平洋岛屿贸易平台", en: "Pacific Island trade platform" }, tags: ["B2B", "太平洋"] }
                ],
                distribution: [
                  { name: "Micronesia Distribution Network", url: "https://www.microbesiadistribution.com", desc: { zh: "密克罗尼西亚分销网络", en: "Micronesia distribution network" }, tags: ["分销", "密克罗尼西亚"] }
                ]
              }
            },
            {
              id: "nauru",
              name: { zh: "瑙鲁", en: "Nauru" },
              flag: "NR",
              channels: {
                official: [
                  { name: "瑙鲁贸易和投资促进局", url: "https://www.naurugov.nr", desc: { zh: "瑙鲁政府官方贸易促进机构", en: "Nauru's official trade and investment promotion agency" }, tags: ["官方", "贸易促进"] }
                ],
                b2b: [
                  { name: "Nauru Business Directory", url: "https://www.naurubusiness.com", desc: { zh: "瑙鲁商业目录", en: "Nauru business directory" }, tags: ["B2B"] }
                ],
                distribution: [
                  { name: "Nauru Distribution Network", url: "https://www.naurudistributionnetwork.com", desc: { zh: "瑙鲁分销网络", en: "Nauru distribution network" }, tags: ["分销", "瑙鲁"] }
                ]
              }
            },
            {
              id: "tuvalu",
              name: { zh: "图瓦卢", en: "Tuvalu" },
              flag: "TV",
              channels: {
                official: [
                  { name: "图瓦卢贸易和商务部", url: "https://www.gov.tv", desc: { zh: "图瓦卢政府官方贸易主管部门", en: "Tuvalu's official trade and commerce ministry" }, tags: ["官方"] }
                ],
                b2b: [
                  { name: "Tuvalu Business Directory", url: "https://www.tuvalubusiness.com", desc: { zh: "图瓦卢商业目录", en: "Tuvalu business directory" }, tags: ["B2B"] }
                ],
                distribution: [
                  { name: "Tuvalu Distribution Network", url: "https://www.tuvaludistributionnetwork.com", desc: { zh: "图瓦卢分销网络", en: "Tuvalu distribution network" }, tags: ["分销", "图瓦卢"] }
                ]
              }
            },
            {
              id: "cook-islands",
              name: { zh: "库克群岛", en: "Cook Islands" },
              flag: "CK",
              channels: {
                official: [
                  { name: "库克群岛贸易和投资促进局", url: "https://www.investcookislands.com", desc: { zh: "库克群岛政府官方贸易促进机构", en: "Cook Islands' official trade and investment promotion agency" }, tags: ["官方", "贸易促进"] },
                  { name: "库克群岛政府", url: "https://www.goveat.co.ck", desc: { zh: "库克群岛政府门户", en: "Cook Islands government portal" }, tags: ["官方"] }
                ],
                b2b: [
                  { name: "Cook Islands Business Directory", url: "https://www.cookislandsbusiness.com", desc: { zh: "库克群岛商业目录", en: "Cook Islands business directory" }, tags: ["B2B"] }
                ],
                distribution: [
                  { name: "Cook Islands Distribution Network", url: "https://www.cookislandsdistributionnetwork.com", desc: { zh: "库克群岛分销网络", en: "Cook Islands distribution network" }, tags: ["分销", "库克群岛"] }
                ]
              }
            },
            {
              id: "niue",
              name: { zh: "纽埃", en: "Niue" },
              flag: "NU",
              channels: {
                official: [
                  { name: "纽埃贸易和商务办公室", url: "https://www.gov.nu", desc: { zh: "纽埃政府官方贸易主管部门", en: "Niue's official trade and commerce office" }, tags: ["官方"] }
                ],
                b2b: [
                  { name: "Niue Business Directory", url: "https://www.niuebusiness.com", desc: { zh: "纽埃商业目录", en: "Niue business directory" }, tags: ["B2B"] }
                ],
                distribution: [
                  { name: "Niue Distribution Network", url: "https://www.niuedistributionnetwork.com", desc: { zh: "纽埃分销网络", en: "Niue distribution network" }, tags: ["分销", "纽埃"] }
                ]
              }
            },
            {
              id: "french-polynesia",
              name: { zh: "法属波利尼西亚", en: "French Polynesia" },
              flag: "PF",
              channels: {
                official: [
                  { name: "法属波利尼西亚政府经济促进局", url: "https://www.economic.gov.pf", desc: { zh: "法属波利尼西亚政府官方经济促进机构", en: "French Polynesia's official economic promotion agency" }, tags: ["官方", "经济促进"] },
                  { name: "法属波利尼西亚工商会", url: "https://www.ccip.pf", desc: { zh: "法属波利尼西亚商会组织", en: "French Polynesia chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "French Polynesia Business Directory", url: "https://www.polynesiebusiness.com", desc: { zh: "法属波利尼西亚商业目录", en: "French Polynesia business directory" }, tags: ["B2B"] },
                  { name: "Tahiti Trade Portal", url: "https://www.tahititrade.com", desc: { zh: "塔希提贸易门户", en: "Tahiti trade portal" }, tags: ["B2B", "贸易"] }
                ],
                distribution: [
                  { name: "French Polynesia Distribution Network", url: "https://www.frenchpolynesiadistributionnetwork.com", desc: { zh: "法属波利尼西亚分销网络", en: "French Polynesia distribution network" }, tags: ["分销", "法属波利尼西亚"] }
                ]
              }
            },
            {
              id: "new-caledonia",
              name: { zh: "新喀里多尼亚", en: "New Caledonia" },
              flag: "NC",
              channels: {
                official: [
                  { name: "新喀里多尼亚政府经济促进局", url: "https://www.choose-new-caledonia.com", desc: { zh: "新喀里多尼亚政府官方经济促进机构", en: "New Caledonia's official economic promotion agency" }, tags: ["官方", "经济促进"] },
                  { name: "新喀里多尼亚工商会", url: "https://www.cci.nc", desc: { zh: "新喀里多尼亚商会组织", en: "New Caledonia chamber of commerce" }, tags: ["商会"] }
                ],
                b2b: [
                  { name: "New Caledonia Business Directory", url: "https://www.newcaledoniabusiness.com", desc: { zh: "新喀里多尼亚商业目录", en: "New Caledonia business directory" }, tags: ["B2B"] },
                  { name: "Pacific Trade Portal", url: "https://www.pacifictradeportal.com", desc: { zh: "太平洋贸易门户", en: "Pacific trade portal" }, tags: ["B2B", "太平洋"] }
                ],
                distribution: [
                  { name: "New Caledonia Distribution Network", url: "https://www.newcaledoniadistributionnetwork.com", desc: { zh: "新喀里多尼亚分销网络", en: "New Caledonia distribution network" }, tags: ["分销", "新喀里多尼亚"] }
                ]
              }
            },
            {
              id: "guam",
              name: { zh: "关岛", en: "Guam" },
              flag: "GU",
              channels: {
                official: [
                  { name: "关岛政府贸易促进办公室", url: "https://www.visitguam.org", desc: { zh: "关岛政府官方贸易促进机构", en: "Guam government trade promotion office" }, tags: ["官方", "贸易促进"] },
                  { name: "关岛采购平台", url: "https://www.guam.gov", desc: { zh: "关岛政府采购平台", en: "Guam government procurement platform" }, tags: ["政府采购"] }
                ],
                b2b: [
                  { name: "Guam Business Directory", url: "https://www.guambusinessdirectory.com", desc: { zh: "关岛商业目录", en: "Guam business directory" }, tags: ["B2B"] },
                  { name: "Pacific Island Trade", url: "https://www.pacificislandtrade.com", desc: { zh: "太平洋岛屿贸易平台", en: "Pacific Island trade platform" }, tags: ["B2B", "太平洋"] }
                ],
                distribution: [
                  { name: "Guam Distribution Network", url: "https://www.guamdistributionnetwork.com", desc: { zh: "关岛分销网络", en: "Guam distribution network" }, tags: ["分销", "关岛"] }
                ]
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
    totalCountries: 177,
    totalChannels: 1010
  }
};

export default TRADEDATA;
