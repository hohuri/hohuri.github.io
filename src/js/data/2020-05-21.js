dataSetVersion = "2020-01-20"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Album Release",
    key: "series",
    tooltip: "Check this to restrict to certain releases.",
    checked: false,
    sub: [
      { name: "Winter Comiket", tooltip: "Released for Comiket in December", key: "wcomiket" },
      { name: "Reitaisai", tooltip: "Released for Reitaisai", key: "rei" },
      { name: "Summer Comiket", tooltip: "Released for Comiket in August", key: "scomiket" }
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "祭 (matsuri)",
    img: "gAB2Pku.jpg",
    opts: {
      series: ["wcomiket"]
    }
  },
  {
    name: "宴 (utage)",
    img: "0iudZeD.jpg",
    opts: {
      series: ["wcomiket"]
    }
  },
  {
    name: "趣 (omomuki)",
    img: "hrOcpVk.jpg",
    opts: {
      series: ["rei"]
    }
  },
  {
    name: "謡 (utai)",
    img: "CRXKs4s.jpg",
    opts: {
      series: ["scomiket"]
    }
  },
  {
    name: "廻 (meguri)",
    img: "DrHoecE.jpg",
    opts: {
      series: ["wcomiket"]
    }
  },
  {
    name: "憩 (ikoi)",
    img: "dxPN5Mv.jpg",
    opts: {
      series: ["rei"]
    }
  },
  {
    name: "遙 (haruka)",
    img: "MAHCix0.jpg",
    opts: {
      series: ["scomiket"]
    }
  },
  {
    name: "綴 (tsudzuri)",
    img: "kzs7GtN.jpg",
    opts: {
      series: ["wcomiket"]
    }
  },
  {
    name: "彩 (irodori)",
    img: "vwbm3JL.jpg",
    opts: {
      series: ["rei"]
    }
  },
  {
    name: "騙 (katari)",
    img: "ywlytS5.jpg",
    opts: {
      series: ["scomiket"]
    }
  },
  {
    name: "徒 (itazura)",
    img: "j4ewT2x.jpg",
    opts: {
      series: ["rei"]
    }
  },
  {
    name: "辿 (tadori)", // PLEASE!!! god
    img: "ewCW6QP.jpg",
    opts: {
      series: ["wcomiket"]
    }
  },
  {
    name: "誘 (izanai)",
    img: "aFPjiNO.jpg",
    opts: {
      series: ["wcomiket"]
    }
  },
  {
    name: "改 (aratame)",
    img: "yiaiEtR.jpg",
    opts: {
      series: ["scomiket"]
    }
  },
  {
    name: "薦 (susume)",
    img: "hz5NGOw.jpg",
    opts: {
      series: ["wcomiket"]
    }
  },
  {
    name: "望 (nozomi)",
    img: "AcrM5LI.jpg",
    opts: {
      series: ["rei"]
    }
  },
  {
    name: "屠 (hofuri)",
    img: "SBIxxHV.jpg",
    opts: {
      series: ["scomiket"]
    }
  },
  {
    name: "奉 (sasage)",
    img: "OOwozgQ.jpg",
    opts: {
      series: ["wcomiket"]
    }
  },
  {
    name: "求 (motome)",
    img: "QnvCLKy.jpg",
    opts: {
      series: ["rei"]
    }
  },
  {
    name: "喩 (tatoe)",
    img: "ER9EkVA.jpg",
    opts: {
      series: ["scomiket"]
    }
  },
  {
    name: "密 (hisoka)",
    img: "h6cEMH3.jpg",
    opts: {
      series: ["wcomiket"]
    }
  },
  {
    name: "掲 (kakage)",
    img: "LhwXJiv.jpg",
    opts: {
      series: ["rei"]
    }
  },
  {
    name: "夢 (utsutsu)",
    img: "dq8C0Hp.jpg",
    opts: {
      series: ["scomiket"]
    }
  },
  {
    name: "虚 (utsuro)",
    img: "ABb7CqC.jpg",
    opts: {
      series: ["wcomiket"]
    }
  },
  {
    name: "伝 (tsutae)",
    img: "e4W4rul.jpg",
    opts: {
      series: ["wcomiket"]
    }
  },
  {
    name: "随 (manima)",
    img: "xaFHTyb.jpg",
    opts: {
      series: ["rei"]
    }
  },
  {
    name: "音 (omoi)",
    img: "SUKYXAN.jpg",
    opts: {
      series: ["scomiket"]
    }
  },
  {
    name: "祀 (matsuri)",
    img: "SbVERyn.jpg",
    opts: {
      series: ["wcomiket"]
    }
  },
  {
    name: "逆 (sakasa)",
    img: "BwLt8v9.jpg",
    opts: {
      series: ["scomiket"]
    }
  },
  {
    name: "娶 (metori)",
    img: "1TIgdoB.jpg",
    opts: {
      series: ["wcomiket"]
    }
  },
  {
    name: "奏 (kanade)",
    img: "ovxFcTs.jpg",
    opts: {
      series: ["rei"]
    }
   },
   {
    name: "眇 (sugame)",
    img: "dhYwg7I.jpg",
    opts: {
       series: ["scomiket"]
      }
   },
   {
    name: "彁",
    img: "8ckzzgf.jpg",
    opts: {
       series: ["wcomiket"]
      },
   {
    name: "蒐 (atsume)",
    img: "cHdGAnI.jpg",
    opts: {
       series: ["rei"]
      }
  }
];
