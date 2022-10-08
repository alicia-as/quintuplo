"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,698];
exports.modules = {

/***/ 567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./pages/SportCard.tsx
var SportCard = __webpack_require__(806);
;// CONCATENATED MODULE: ./utils/helpers.ts
const generateRandomSports = (sports, numberOfSports)=>{
    // Create a list multiplying the sports by their likelihood
    // Shuffle the list and pick the first `numberOfSports` unique items
    const sportsList = sports.filter((sport)=>!sport.isFinalOnly).flatMap((sport)=>Array(sport.likelihood).fill(sport)).sort(()=>Math.random() - 0.5).filter((sport, index, self)=>self.indexOf(sport) === index).slice(0, numberOfSports - 1);
    const lastSport = sports.filter((sport)=>sport.isFinalOnly).flatMap((sport)=>Array(sport.likelihood).fill(sport)).sort(()=>Math.random() - 0.5).filter((sport, index, self)=>self.indexOf(sport) === index)[0];
    const randomSports = [
        ...sportsList,
        lastSport
    ];
    return randomSports;
};

;// CONCATENATED MODULE: ./pages/index.tsx





const Home = ({ sports  })=>{
    const { 0: randomSports , 1: setRandomSports  } = (0,external_react_.useState)(sports);
    const { 0: generate , 1: setGenerate  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setRandomSports(generateRandomSports(sports, 5));
    }, [
        sports
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Fem sporter p\xe5 \xe9n dag"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Don't forget to work out!"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: "h-screen",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex justify-evenly w-screen ",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "button",
                            className: "mt-12 text-4xl inline-flex justify-center rounded-xl border border-transparent bg-[#222] px-6 py-4 font-medium text-white hover:bg-[#444] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#888] focus-visible:ring-offset-2",
                            onClick: ()=>setGenerate(true),
                            children: "Generer quintuplo"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "justify-items-center grid grid-cols-5 grid-rows-5 p-20",
                        children: sports && sports.map((sport, index)=>/*#__PURE__*/ jsx_runtime_.jsx(SportCard["default"], {
                                sport: sport,
                                isSelected: generate && randomSports.includes(sport),
                                timeout: 2000,
                                index: randomSports.indexOf(sport) + 1
                            }, sport.id))
                    })
                ]
            })
        ]
    });
};
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
async function getServerSideProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const boringSports = __webpack_require__(850);
    const sports = boringSports.sort(()=>Math.random() - 0.5);
    // const sortedSports = sports.sort(() => (Math.random() > 0.5 ? 1 : -1));
    return {
        props: {
            sports
        }
    };
}
/* harmony default export */ const pages = (Home);


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 850:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"title":"Løping","target":{"easy":"3000 m","medium":"5000 m","hard":"10000 m"},"emoji":"🏃","marketing":null,"likelihood":9},{"id":2,"title":"Styrketrening","target":{"easy":"300 kcal","medium":"500 kcal","hard":"700 kcal"},"emoji":"🏋️‍♀️","marketing":null,"likelihood":8},{"id":3,"title":"Squash","target":{"easy":"300 kcal","medium":"400 kcal","hard":"500 kcal"},"emoji":"🥒","marketing":null,"likelihood":6},{"id":4,"title":"Svømming","target":{"easy":"1000 m","medium":"1500 m","hard":"2000 m"},"emoji":"🏊‍♀️","marketing":null,"likelihood":6},{"id":5,"title":"Minigolf","target":{"easy":"18 hull","medium":"18 hull","hard":"18 hull"},"emoji":"🏌️","marketing":null,"likelihood":3,"isFinalOnly":true},{"id":6,"title":"Bordtennis","target":{"easy":"300 kcal","medium":"400 kcal","hard":"500 kcal"},"emoji":"🏓","marketing":null,"likelihood":4,"isFinalOnly":false},{"id":7,"title":"Klatring","target":{"easy":"400 kcal","medium":"500 kcal","hard":"600 kcal"},"emoji":"🧗🏼‍♀️","marketing":null,"likelihood":5,"isFinalOnly":false},{"id":8,"title":"Sykling","target":{"easy":"5 km","medium":"10 km","hard":"20 km"},"emoji":"🚴‍♀️","marketing":null,"likelihood":3,"isFinalOnly":false},{"id":9,"title":"Yoga","target":{"easy":"300 kcal","medium":"400 kcal","hard":"500 kcal"},"emoji":"🧘🏼","marketing":null,"likelihood":2,"isFinalOnly":false},{"id":10,"title":"Alpin","target":{"easy":"500 kcal","medium":"700 kcal","hard":"900 kcal"},"emoji":"⛷","marketing":null,"likelihood":2,"isFinalOnly":false},{"id":11,"title":"Padeltennis","target":{"easy":"300 kcal","medium":"400 kcal","hard":"500 kcal"},"emoji":"🎾","marketing":null,"likelihood":7,"isFinalOnly":false},{"id":12,"title":"Crossfit","target":{"easy":"20 min AMRAP","medium":"30 min AMRAP","hard":"45 min AMRAP"},"emoji":"🙅","marketing":null,"likelihood":3,"isFinalOnly":false},{"id":13,"title":"Fotball","target":{"easy":"400 kcal","medium":"500 kcal","hard":"700 kcal"},"emoji":"⚽️","marketing":null,"likelihood":3,"isFinalOnly":false},{"id":14,"title":"Dart","target":{"easy":">500 poeng","medium":">750 poeng","hard":">1500 poeng"},"emoji":"🎯","marketing":null,"likelihood":7,"isFinalOnly":true},{"id":15,"title":"Biljard","target":{"easy":"1 win","medium":"2 wins","hard":"3 wins"},"emoji":"🎱","marketing":null,"likelihood":7,"isFinalOnly":true},{"id":16,"title":"Shuffleboard","target":{"easy":"15 points","medium":"30 points","hard":"50 points"},"emoji":"🥌","marketing":null,"likelihood":5,"isFinalOnly":true},{"id":17,"title":"Bowling","target":{"easy":"2 spare / 1 strike","medium":"1 spare & 1 strike","hard":"2 strikes"},"emoji":"🎳","marketing":null,"likelihood":7,"isFinalOnly":true},{"id":18,"title":"Trappeløp","target":{"easy":"200 trappetrinn","medium":"300 trappetrinn","hard":"500 trappetrinn"},"emoji":"👟","marketing":null,"likelihood":3,"isFinalOnly":false},{"id":19,"title":"Basketball","target":{"easy":"300 kcal","medium":"400 kcal","hard":"500 kcal"},"emoji":"🏀","marketing":null,"likelihood":2,"isFinalOnly":false},{"id":20,"title":"Langrenn","target":{"easy":"5 km","medium":"8 km","hard":"15 km"},"emoji":"🎿","marketing":null,"likelihood":1,"isFinalOnly":false},{"id":21,"title":"Frisbeegolf","target":{"easy":"9 hull","medium":"12 hull","hard":"18 hull"},"emoji":"🥏","marketing":null,"likelihood":5,"isFinalOnly":false},{"id":22,"title":"Volleyball","target":{"easy":"300 kcal","medium":"400 kcal","hard":"500 kcal"},"emoji":"🏐","marketing":null,"likelihood":4,"isFinalOnly":false},{"id":23,"title":"Badminton","target":{"easy":"400 kcal","medium":"500 kcal","hard":"600 kcal"},"emoji":"🏸","marketing":null,"likelihood":4,"isFinalOnly":false},{"id":24,"title":"Roing","target":{"easy":"300 kcal","medium":"400 kcal","hard":"500 kcal"},"emoji":"🚣🏻‍♀️","marketing":null,"likelihood":3,"isFinalOnly":false},{"id":25,"title":"Gokart","target":{"easy":"10 laps","medium":"20 laps","hard":"30 laps"},"emoji":"🏁","marketing":null,"likelihood":4,"isFinalOnly":true}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [806], () => (__webpack_exec__(567)));
module.exports = __webpack_exports__;

})();