const countries = [
  {
    name: "Afghanistan",
    flagcdn: "https://flagcdn.com/af.svg",
    code: `af`
  },
  {
    name: "Albania",
    flagcdn: "https://flagcdn.com/al.svg",
    code: `al`
  },
  {
    name: "Algeria",
    flagcdn: "https://flagcdn.com/dz.svg",
    code: `dz`
  },
  {
    name: "Andorra",
    flagcdn: "https://flagcdn.com/ad.svg",
    code: `ad`
  },
  {
    name: "Angola",
    flagcdn: "https://flagcdn.com/ao.svg",
    code: `ao`
  },
  {
    name: "Argentina",
    flagcdn: "https://flagcdn.com/ar.svg",
    code: `ar`
  },
  {
    name: "Armenia",
    flagcdn: "https://flagcdn.com/am.svg",
    code: `am`
  },
  {
    name: "Australia",
    flagcdn: "https://flagcdn.com/au.svg",
    code: `au`
  },
  {
    name: "Austria",
    flagcdn: "https://flagcdn.com/at.svg",
    code: `at`
  },
  {
    name: "Azerbaijan",
    flagcdn: "https://flagcdn.com/az.svg",
    code: `az`
  },
  {
    name: "Bahamas",
    flagcdn: "https://flagcdn.com/bs.svg",
    code: `bs`
  },
  {
    name: "Bahrain",
    flagcdn: "https://flagcdn.com/bh.svg",
    code: `bh`
  },
  {
    name: "Bangladesh",
    flagcdn: "https://flagcdn.com/bd.svg",
    code: `bd`
  },
  {
    name: "Barbados",
    flagcdn: "https://flagcdn.com/bb.svg",
    code: `bb`
  },
  {
    name: "Belarus",
    flagcdn: "https://flagcdn.com/by.svg",
    code: `by`
  },
  {
    name: "Belgium",
    flagcdn: "https://flagcdn.com/be.svg",
    code: `be`
  },
  {
    name: "Belize",
    flagcdn: "https://flagcdn.com/bz.svg",
    code: `bz`
  },
  {
    name: "Benin",
    flagcdn: "https://flagcdn.com/bj.svg",
    code: `bj`
  },
  {
    name: "Bhutan",
    flagcdn: "https://flagcdn.com/bt.svg",
    code: `bt`
  },
  {
    name: "Bolivia",
    flagcdn: "https://flagcdn.com/bo.svg",
    code: `bo`
  },
  {
    name: "Bosnia and Herzegovina",
    flagcdn: "https://flagcdn.com/ba.svg",
    code: `ba`
  },
  {
    name: "Botswana",
    flagcdn: "https://flagcdn.com/bw.svg",
    code: `bw`
  },
  {
    name: "Brazil",
    flagcdn: "https://flagcdn.com/br.svg",
    code: `br`
  },
  {
    name: "Brunei",
    flagcdn: "https://flagcdn.com/bn.svg",
    code: `bn`
  },
  {
    name: "Bulgaria",
    flagcdn: "https://flagcdn.com/bg.svg",
    code: `bg`
  },
  {
    name: "Burkina Faso",
    flagcdn: "https://flagcdn.com/bf.svg",
    code: `bf`
  },
  {
    name: "Burundi",
    flagcdn: "https://flagcdn.com/bi.svg",
    code: `bi`
  },
  {
    name: "Cambodia",
    flagcdn: "https://flagcdn.com/kh.svg",
    code: `kh`
  },
  {
    name: "Cameroon",
    flagcdn: "https://flagcdn.com/cm.svg",
    code: `cm`
  },
  {
    name: "Canada",
    flagcdn: "https://flagcdn.com/ca.svg",
    code: `ca`
  },
  {
    name: "Cape Verde",
    flagcdn: "https://flagcdn.com/cv.svg",
    code: `cv`
  },
  {
    name: "Central African Republic",
    flagcdn: "https://flagcdn.com/cf.svg",
    code: `cf`
  },
  {
    name: "Chad",
    flagcdn: "https://flagcdn.com/td.svg",
    code: `td`
  },
  {
    name: "Chile",
    flagcdn: "https://flagcdn.com/cl.svg",
    code: `cl`
  },
  {
    name: "China",
    flagcdn: "https://flagcdn.com/cn.svg",
    code: `cn`
  },
  {
    name: "Colombia",
    flagcdn: "https://flagcdn.com/co.svg",
    code: `co`
  },
  {
    name: "Comoros",
    flagcdn: "https://flagcdn.com/km.svg",
    code: `km`
  },
  {
    name: "Congo",
    flagcdn: "https://flagcdn.com/cg.svg",
    code: `cg`
  },
  {
    name: "Costa Rica",
    flagcdn: "https://flagcdn.com/cr.svg",
    code: `cr`
  },
  {
    name: "Croatia",
    flagcdn: "https://flagcdn.com/hr.svg",
    code: `hr`
  },
  {
    name: "Cuba",
    flagcdn: "https://flagcdn.com/cu.svg",
    code: `cu`
  },
  {
    name: "Cyprus",
    flagcdn: "https://flagcdn.com/cy.svg",
    code: `cy`
  },
  {
    name: "Czech Republic",
    flagcdn: "https://flagcdn.com/cz.svg",
    code: `cz`
  },
  {
    name: "Denmark",
    flagcdn: "https://flagcdn.com/dk.svg",
    code: `dk`
  },
  {
    name: "Djibouti",
    flagcdn: "https://flagcdn.com/dj.svg",
    code: `dj`
  },
  {
    name: "Dominica",
    flagcdn: "https://flagcdn.com/dm.svg",
    code: `dm`
  },
  {
    name: "Dominican Republic",
    flagcdn: "https://flagcdn.com/do.svg",
    code: `do`
  },
  {
    name: "Ecuador",
    flagcdn: "https://flagcdn.com/ec.svg",
    code: `ec`
  },
  {
    name: "Egypt",
    flagcdn: "https://flagcdn.com/eg.svg",
    code: `eg`
  },
  {
    name: "El Salvador",
    flagcdn: "https://flagcdn.com/sv.svg",
    code: `sv`
  },
  {
    name: "Equatorial Guinea",
    flagcdn: "https://flagcdn.com/gq.svg",
    code: `gq`
  },
  {
    name: "Eritrea",
    flagcdn: "https://flagcdn.com/er.svg",
    code: `er`
  },
  {
    name: "Estonia",
    flagcdn: "https://flagcdn.com/ee.svg",
    code: `ee`
  },
  {
    name: "Eswatini",
    flagcdn: "https://flagcdn.com/sz.svg",
    code: `sz`
  },
  {
    name: "Ethiopia",
    flagcdn: "https://flagcdn.com/et.svg",
    code: `et`
  },
  {
    name: "Fiji",
    flagcdn: "https://flagcdn.com/fj.svg",
    code: `fj`
  },
  {
    name: "Finland",
    flagcdn: "https://flagcdn.com/fi.svg",
    code: `fi`
  },
  {
    name: "France",
    flagcdn: "https://flagcdn.com/fr.svg",
    code: `fr`
  },
  {
    name: "Gabon",
    flagcdn: "https://flagcdn.com/ga.svg",
    code: `ga`
  },
  {
    name: "Gambia",
    flagcdn: "https://flagcdn.com/gm.svg",
    code: `gm`
  },
  {
    name: "Georgia",
    flagcdn: "https://flagcdn.com/ge.svg",
    code: `ge`
  },
  {
    name: "Germany",
    flagcdn: "https://flagcdn.com/de.svg",
    code: `de`
  },
  {
    name: "Ghana",
    flagcdn: "https://flagcdn.com/gh.svg",
    code: `gh`
  },
  {
    name: "Greece",
    flagcdn: "https://flagcdn.com/gr.svg",
    code: `gr`
  },
  {
    name: "Grenada",
    flagcdn: "https://flagcdn.com/gd.svg",
    code: `gd`
  },
  {
    name: "Guatemala",
    flagcdn: "https://flagcdn.com/gt.svg",
    code: `gt`
  },
  {
    name: "Guinea",
    flagcdn: "https://flagcdn.com/gn.svg",
    code: `gn`
  },
  {
    name: "Guinea-Bissau",
    flagcdn: "https://flagcdn.com/gw.svg",
    code: `gw`
  },
  {
    name: "Guyana",
    flagcdn: "https://flagcdn.com/gy.svg",
    code: `gy`
  },
  {
    name: "Haiti",
    flagcdn: "https://flagcdn.com/ht.svg",
    code: `ht`
  },
  {
    name: "Honduras",
    flagcdn: "https://flagcdn.com/hn.svg",
    code: `hn`
  },
  {
    name: "Hungary",
    flagcdn: "https://flagcdn.com/hu.svg",
    code: `hu`
  },
  {
    name: "Iceland",
    flagcdn: "https://flagcdn.com/is.svg",
    code: `is`
  },
  {
    name: "India",
    flagcdn: "https://flagcdn.com/in.svg",
    code: `in`
  },
  {
    name: "Indonesia",
    flagcdn: "https://flagcdn.com/id.svg",
    code: `id`
  },
  {
    name: "Iran",
    flagcdn: "https://flagcdn.com/ir.svg",
    code: `ir`
  },
  {
    name: "Iraq",
    flagcdn: "https://flagcdn.com/iq.svg",
    code: `iq`
  },
  {
    name: "Ireland",
    flagcdn: "https://flagcdn.com/ie.svg",
    code: `ie`
  },
  {
    name: "Israel",
    flagcdn: "https://flagcdn.com/il.svg",
    code: `il`
  },
  {
    name: "Italy",
    flagcdn: "https://flagcdn.com/it.svg",
    code: `it`
  },
  {
    name: "Jamaica",
    flagcdn: "https://flagcdn.com/jm.svg",
    code: `jm`
  },
  {
    name: "Japan",
    flagcdn: "https://flagcdn.com/jp.svg",
    code: `jp`
  },
  {
    name: "Jordan",
    flagcdn: "https://flagcdn.com/jo.svg",
    code: `jo`
  },
  {
    name: "Kazakhstan",
    flagcdn: "https://flagcdn.com/kz.svg",
    code: `kz`
  },
  {
    name: "Kenya",
    flagcdn: "https://flagcdn.com/ke.svg",
    code: `ke`
  },
  {
    name: "Kiribati",
    flagcdn: "https://flagcdn.com/ki.svg",
    code: `ki`
  },
  {
    name: "Korea, North",
    flagcdn: "https://flagcdn.com/kp.svg",
    code: `kp`
  },
  {
    name: "Korea, South",
    flagcdn: "https://flagcdn.com/kr.svg",
    code: `kr`
  },
  {
    name: "Kosovo",
    flagcdn: "https://flagcdn.com/xk.svg",
    code: `xk`
  },
  {
    name: "Kuwait",
    flagcdn: "https://flagcdn.com/kw.svg",
    code: `kw`
  },
  {
    name: "Kyrgyzstan",
    flagcdn: "https://flagcdn.com/kg.svg",
    code: `kg`
  },
  {
    name: "Laos",
    flagcdn: "https://flagcdn.com/la.svg",
    code: `la`
  },
  {
    name: "Latvia",
    flagcdn: "https://flagcdn.com/lv.svg",
    code: `lv`
  },
  {
    name: "Lebanon",
    flagcdn: "https://flagcdn.com/lb.svg",
    code: `lb`
  },
  {
    name: "Lesotho",
    flagcdn: "https://flagcdn.com/ls.svg",
    code: `ls`
  },
  {
    name: "Liberia",
    flagcdn: "https://flagcdn.com/lr.svg",
    code: `lr`
  },
  {
    name: "Libya",
    flagcdn: "https://flagcdn.com/ly.svg",
    code: `ly`
  },
  {
    name: "Liechtenstein",
    flagcdn: "https://flagcdn.com/li.svg",
    code: `li`
  },
  {
    name: "Lithuania",
    flagcdn: "https://flagcdn.com/lt.svg",
    code: `lt`
  },
  {
    name: "Luxembourg",
    flagcdn: "https://flagcdn.com/lu.svg",
    code: `lu`
  },
  {
    name: "Madagascar",
    flagcdn: "https://flagcdn.com/mg.svg",
    code: `mg`
  },
  {
    name: "Malawi",
    flagcdn: "https://flagcdn.com/mw.svg",
    code: `mw`
  },
  {
    name: "Malaysia",
    flagcdn: "https://flagcdn.com/my.svg",
    code: `my`
  },
  {
    name: "Maldives",
    flagcdn: "https://flagcdn.com/mv.svg",
    code: `mv`
  },
  {
    name: "Mali",
    flagcdn: "https://flagcdn.com/ml.svg",
    code: `ml`
  },
  {
    name: "Malta",
    flagcdn: "https://flagcdn.com/mt.svg",
    code: `mt`
  },
  {
    name: "Marshall Islands",
    flagcdn: "https://flagcdn.com/mh.svg",
    code: `mh`
  },
  {
    name: "Mauritania",
    flagcdn: "https://flagcdn.com/mr.svg",
    code: `mr`
  },
  {
    name: "Mauritius",
    flagcdn: "https://flagcdn.com/mu.svg",
    code: `mu`
  },
  {
    name: "Mexico",
    flagcdn: "https://flagcdn.com/mx.svg",
    code: `mx`
  },
  {
    name: "Micronesia",
    flagcdn: "https://flagcdn.com/fm.svg",
    code: `fm`
  },
  {
    name: "Moldova",
    flagcdn: "https://flagcdn.com/md.svg",
    code: `md`
  },
  {
    name: "Monaco",
    flagcdn: "https://flagcdn.com/mc.svg",
    code: `mc`
  },
  {
    name: "Mongolia",
    flagcdn: "https://flagcdn.com/mn.svg",
    code: `mn`
  },
  {
    name: "Montenegro",
    flagcdn: "https://flagcdn.com/me.svg",
    code: `me`
  },
  {
    name: "Morocco",
    flagcdn: "https://flagcdn.com/ma.svg",
    code: `ma`
  },
  {
    name: "Mozambique",
    flagcdn: "https://flagcdn.com/mz.svg",
    code: `mz`
  },
  {
    name: "Myanmar (Burma)",
    flagcdn: "https://flagcdn.com/mm.svg",
    code: `mm`
  },
  {
    name: "Namibia",
    flagcdn: "https://flagcdn.com/na.svg",
    code: `na`
  },
  {
    name: "Nauru",
    flagcdn: "https://flagcdn.com/nr.svg",
    code: `nr`
  },
  {
    name: "Nepal",
    flagcdn: "https://flagcdn.com/np.svg",
    code: `np`
  },
  {
    name: "Netherlands",
    flagcdn: "https://flagcdn.com/nl.svg",
    code: `nl`
  },
  {
    name: "New Zealand",
    flagcdn: "https://flagcdn.com/nz.svg",
    code: `nz`
  },
  {
    name: "Nicaragua",
    flagcdn: "https://flagcdn.com/ni.svg",
    code: `ni`
  },
  {
    name: "Niger",
    flagcdn: "https://flagcdn.com/ne.svg",
    code: `ne`
  },
  {
    name: "Nigeria",
    flagcdn: "https://flagcdn.com/ng.svg",
    code: `ng`
  },
  {
    name: "North Macedonia",
    flagcdn: "https://flagcdn.com/mk.svg",
    code: `mk`
  },
  {
    name: "Norway",
    flagcdn: "https://flagcdn.com/no.svg",
    code: `no`
  },
  {
    name: "Oman",
    flagcdn: "https://flagcdn.com/om.svg",
    code: `om`
  },
  {
    name: "Pakistan",
    flagcdn: "https://flagcdn.com/pk.svg",
    code: `pk`
  },
  {
    name: "Palau",
    flagcdn: "https://flagcdn.com/pw.svg",
    code: `pw`
  },
  {
    name: "Palestine",
    flagcdn: "https://flagcdn.com/ps.svg",
    code: `ps`
  },
  {
    name: "Panama",
    flagcdn: "https://flagcdn.com/pa.svg",
    code: `pa`
  },
  {
    name: "Papua New Guinea",
    flagcdn: "https://flagcdn.com/pg.svg",
    code: `pg`
  },
  {
    name: "Paraguay",
    flagcdn: "https://flagcdn.com/py.svg",
    code: `py`
  },
  {
    name: "Peru",
    flagcdn: "https://flagcdn.com/pe.svg",
    code: `pe`
  },
  {
    name: "Philippines",
    flagcdn: "https://flagcdn.com/ph.svg",
    code: `ph`
  },
  {
    name: "Poland",
    flagcdn: "https://flagcdn.com/pl.svg",
    code: `pl`
  },
  {
    name: "Portugal",
    flagcdn: "https://flagcdn.com/pt.svg",
    code: `pt`
  },
  {
    name: "Qatar",
    flagcdn: "https://flagcdn.com/qa.svg",
    code: `qa`
  },
  {
    name: "Romania",
    flagcdn: "https://flagcdn.com/ro.svg",
    code: `ro`
  },
  {
    name: "Russia",
    flagcdn: "https://flagcdn.com/ru.svg",
    code: `ru`
  },
  {
    name: "Rwanda",
    flagcdn: "https://flagcdn.com/rw.svg",
    code: `rw`
  },
  {
    name: "Saint Kitts and Nevis",
    flagcdn: "https://flagcdn.com/kn.svg",
    code: `kn`
  },
  {
    name: "Saint Lucia",
    flagcdn: "https://flagcdn.com/lc.svg",
    code: `lc`
  },
  {
    name: "Saint Vincent and the Grenadines",
    flagcdn: "https://flagcdn.com/vc.svg",
    code: `vc`
  },
  {
    name: "Samoa",
    flagcdn: "https://flagcdn.com/ws.svg",
    code: `ws`
  },
  {
    name: "San Marino",
    flagcdn: "https://flagcdn.com/sm.svg",
    code: `sm`
  },
  {
    name: "Sao Tome and Principe",
    flagcdn: "https://flagcdn.com/st.svg",
    code: `st`
  },
  {
    name: "Saudi Arabia",
    flagcdn: "https://flagcdn.com/sa.svg",
    code: `sa`
  },
  {
    name: "Senegal",
    flagcdn: "https://flagcdn.com/sn.svg",
    code: `sn`
  },
  {
    name: "Serbia",
    flagcdn: "https://flagcdn.com/rs.svg",
    code: `rs`
  },
  {
    name: "Seychelles",
    flagcdn: "https://flagcdn.com/sc.svg",
    code: `sc`
  },
  {
    name: "Sierra Leone",
    flagcdn: "https://flagcdn.com/sl.svg",
    code: `sl`
  },
  {
    name: "Singapore",
    flagcdn: "https://flagcdn.com/sg.svg",
    code: `sg`
  },
  {
    name: "Slovakia",
    flagcdn: "https://flagcdn.com/sk.svg",
    code: `sk`
  },
  {
    name: "Slovenia",
    flagcdn: "https://flagcdn.com/si.svg",
    code: `si`
  },
  {
    name: "Solomon Islands",
    flagcdn: "https://flagcdn.com/sb.svg",
    code: `sb`
  },
  {
    name: "Somalia",
    flagcdn: "https://flagcdn.com/so.svg",
    code: `so`
  },
  {
    name: "South Africa",
    flagcdn: "https://flagcdn.com/za.svg",
    code: `za`
  },
  {
    name: "Spain",
    flagcdn: "https://flagcdn.com/es.svg",
    code: `es`
  },
  {
    name: "Sri Lanka",
    flagcdn: "https://flagcdn.com/lk.svg",
    code: `lk`
  },
  {
    name: "Sudan",
    flagcdn: "https://flagcdn.com/sd.svg",
    code: `sd`
  },
  {
    name: "Suriname",
    flagcdn: "https://flagcdn.com/sr.svg",
    code: `sr`
  },
  {
    name: "Sweden",
    flagcdn: "https://flagcdn.com/se.svg",
    code: `se`
  },
  {
    name: "Switzerland",
    flagcdn: "https://flagcdn.com/ch.svg",
    code: `ch`
  },
  {
    name: "Syria",
    flagcdn: "https://flagcdn.com/sy.svg",
    code: `sy`
  },
  {
    name: "Taiwan",
    flagcdn: "https://flagcdn.com/tw.svg",
    code: `tw`
  },
  {
    name: "Tajikistan",
    flagcdn: "https://flagcdn.com/tj.svg",
    code: `tj`
  },
  {
    name: "Tanzania",
    flagcdn: "https://flagcdn.com/tz.svg",
    code: `tz`
  },
  {
    name: "Thailand",
    flagcdn: "https://flagcdn.com/th.svg",
    code: `th`
  },
  {
    name: "Timor-Leste",
    flagcdn: "https://flagcdn.com/tl.svg",
    code: `tl`
  },
  {
    name: "Togo",
    flagcdn: "https://flagcdn.com/tg.svg",
    code: `tg`
  },
  {
    name: "Tonga",
    flagcdn: "https://flagcdn.com/to.svg",
    code: `to`
  },
  {
    name: "Trinidad and Tobago",
    flagcdn: "https://flagcdn.com/tt.svg",
    code: `tt`
  },
  {
    name: "Tunisia",
    flagcdn: "https://flagcdn.com/tn.svg",
    code: `tn`
  },
  {
    name: "Turkey",
    flagcdn: "https://flagcdn.com/tr.svg",
    code: `tr`
  },
  {
    name: "Turkmenistan",
    flagcdn: "https://flagcdn.com/tm.svg",
    code: `tm`
  },
  {
    name: "Tuvalu",
    flagcdn: "https://flagcdn.com/tv.svg",
    code: `tv`
  },
  {
    name: "Uganda",
    flagcdn: "https://flagcdn.com/ug.svg",
    code: `ug`
  },
  {
    name: "Ukraine",
    flagcdn: "https://flagcdn.com/ua.svg",
    code: `ua`
  },
  {
    name: "United Arab Emirates",
    flagcdn: "https://flagcdn.com/ae.svg",
    code: `ae`
  },
  {
    name: "United Kingdom",
    flagcdn: "https://flagcdn.com/gb.svg",
    code: `gb`
  },
  {
    name: "United States",
    flagcdn: "https://flagcdn.com/us.svg",
    code: `us`
  },
  {
    name: "Uruguay",
    flagcdn: "https://flagcdn.com/uy.svg",
    code: `uy`
  },
  {
    name: "Uzbekistan",
    flagcdn: "https://flagcdn.com/uz.svg",
    code: `uz`
  },
  {
    name: "Vanuatu",
    flagcdn: "https://flagcdn.com/vu.svg",
    code: `vu`
  },
  {
    name: "Vatican City",
    flagcdn: "https://flagcdn.com/va.svg",
    code: `va`
  },
  {
    name: "Venezuela",
    flagcdn: "https://flagcdn.com/ve.svg",
    code: `ve`
  },
  {
    name: "Vietnam",
    flagcdn: "https://flagcdn.com/vn.svg",
    code: `vn`
  },
  {
    name: "Yemen",
    flagcdn: "https://flagcdn.com/ye.svg",
    code: `ye`
  },
  {
    name: "Zambia",
    flagcdn: "https://flagcdn.com/zm.svg",
    code: `zm`
  },
  {
    name: "Zimbabwe",
    flagcdn: "https://flagcdn.com/zw.svg",
    code: `zw`
  }
];

export default countries;