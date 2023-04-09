"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./utils/animation.js":
/*!****************************!*\
  !*** ./utils/animation.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createAnimation\": function() { return /* binding */ createAnimation; }\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n\n\n\nfunction createAnimation(app) {\n    const scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n    const camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n    const renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer();\n    renderer.setSize(window.innerWidth, window.innerHeight);\n    //Set background scene\n    const skyboxLoader = new three__WEBPACK_IMPORTED_MODULE_0__.CubeTextureLoader().setPath(\"/assets/1024/\");\n    const skybox = skyboxLoader.load([\n        \"xpos.png\",\n        \"xneg.png\",\n        \"ypos.png\",\n        \"yneg.png\",\n        \"zpos.png\",\n        \"zneg.png\"\n    ]);\n    scene.background = skybox;\n    //Create stars\n    const starGeometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();\n    const starMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.PointsMaterial({\n        color: 0xffffff\n    });\n    const starCount = 5000;\n    const starPositions = new Float32Array(starCount * 3);\n    const starSizes = new Float32Array(starCount);\n    for(let i = 0; i < starCount * 3; i++){\n        starPositions[i] = (Math.random() - 0.5) * 1000;\n        starSizes[i] = Math.random() * 1;\n    }\n    starGeometry.setAttribute(\"position\", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(starPositions, 3));\n    starGeometry.setAttribute(\"size\", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(starSizes, 1));\n    const stars = new three__WEBPACK_IMPORTED_MODULE_0__.Points(starGeometry, starMaterial);\n    scene.add(stars);\n    const geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(.5, .5, .5);\n    const material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({\n        color: 0x0095DD,\n        wireframe: true,\n        wireframeLinewidth: 2\n    });\n    const cube = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material);\n    scene.add(cube);\n    camera.position.z = 5;\n    // Function to reveal the welcome text\n    function revealWelcomeText() {\n        const welcomeText = document.getElementById(\"welcome-text\");\n        welcomeText.style.opacity = \"1\";\n    }\n    // Function to hide the welcome text and show the intro box\n    function hideWelcomeTextAndShowIntroBox() {\n        const welcomeText = document.getElementById(\"welcome-text\");\n        const introBox = document.getElementById(\"intro-box\");\n        welcomeText.style.display = \"0\";\n        setTimeout(()=>{\n            welcomeText.style.display = \"none\";\n            introBox.style.display = \"block\";\n        }, 1000);\n    }\n    const totalAnimationDuration = 8;\n    let animationFinished = false;\n    //Controls for the orbit stars movement\n    const controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__.OrbitControls(camera, renderer.domElement);\n    controls.enableDamping = true;\n    let initialCameraAnimationDone = false;\n    camera.position.z = 300;\n    function animate() {\n        requestAnimationFrame(animate);\n        if (!initialCameraAnimationDone) {\n            // Zoom the camera from the initial position to the default position\n            gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(camera.position, {\n                duration: 2,\n                z: 5,\n                onUpdate: ()=>{\n                    camera.updateProjectionMatrix();\n                },\n                onComplete: ()=>{\n                    initialCameraAnimationDone = true;\n                }\n            });\n        }\n        if (!animationFinished) {\n            // Animate the x, y and z positions of the objects\n            gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(cube.position, {\n                duration: 5,\n                x: 1\n            });\n            gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(cube.position, {\n                duration: 5,\n                y: 1\n            });\n            gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(cube.position, {\n                duration: 5,\n                z: 1\n            });\n            // Animate the x, y and z scale/size of the objects\n            gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(cube.scale, {\n                duration: 8,\n                x: 20\n            });\n            gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(cube.scale, {\n                duration: 8,\n                y: 20\n            });\n            gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(cube.scale, {\n                duration: 8,\n                z: 20\n            });\n            // Animate the x, y and z rotation of the objects\n            gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(cube.rotation, {\n                duration: 2,\n                x: 3\n            });\n            gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(cube.rotation, {\n                duration: 2,\n                y: 3\n            });\n            gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(cube.rotation, {\n                duration: 2,\n                z: 3\n            });\n        } else {\n            //Rotate once scale is done\n            cube.rotation.x += 0.001;\n            cube.rotation.y += 0.001;\n            cube.rotation.z += 0.001;\n            //Rotate stars\n            stars.rotation.x += -0.001;\n            stars.rotation.y += -0.001;\n            stars.rotation.z += -0.001;\n        }\n        controls.update();\n        renderer.render(scene, camera);\n    }\n    animate();\n    app.appendChild(renderer.domElement);\n    // Trigger the welcome text and intro box display\n    revealWelcomeText();\n    setTimeout(revealWelcomeText, totalAnimationDuration * 1000);\n    setTimeout(()=>{\n        hideWelcomeTextAndShowIntroBox();\n    }, totalAnimationDuration * 300);\n    setTimeout(()=>{\n        animationFinished = true;\n    }, totalAnimationDuration * 200);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSTtZQUNuQjNCLEtBQUs4QixRQUFRLENBQUNGLENBQUMsSUFBSTtZQUNuQjVCLEtBQUs4QixRQUFRLENBQUMzQixDQUFDLElBQUk7WUFDbkIsY0FBYztZQUNkWixNQUFNdUMsUUFBUSxDQUFDSCxDQUFDLElBQUksQ0FBQztZQUNyQnBDLE1BQU11QyxRQUFRLENBQUNGLENBQUMsSUFBSSxDQUFDO1lBQ3JCckMsTUFBTXVDLFFBQVEsQ0FBQzNCLENBQUMsSUFBSSxDQUFDO1FBQ3pCLENBQUM7UUFDRGEsU0FBU2UsTUFBTTtRQUNmL0QsU0FBU2dFLE1BQU0sQ0FBQ3ZFLE9BQU9FO0lBQzNCO0lBRUF5RDtJQUNBNUQsSUFBSXlFLFdBQVcsQ0FBQ2pFLFNBQVNpRCxVQUFVO0lBQ25DLGlEQUFpRDtJQUNqRGI7SUFDQVMsV0FBV1QsbUJBQW1CVSx5QkFBeUI7SUFDdkRELFdBQVcsSUFBTTtRQUNiSDtJQUNKLEdBQUdJLHlCQUF5QjtJQUM1QkQsV0FBVyxJQUFNO1FBQ2JFLG9CQUFvQixJQUFJO0lBQzVCLEdBQUdELHlCQUF5QjtBQUNoQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL2FuaW1hdGlvbi5qcz9lMTQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBbmltYXRpb24oYXBwKSB7XG4gICAgY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LCAwLjEsIDEwMDApO1xuICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoKTtcbiAgICByZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuXG4gICAgLy9TZXQgYmFja2dyb3VuZCBzY2VuZVxuICAgIGNvbnN0IHNreWJveExvYWRlciA9IG5ldyBUSFJFRS5DdWJlVGV4dHVyZUxvYWRlcigpLnNldFBhdGgoXCIvYXNzZXRzLzEwMjQvXCIpO1xuICAgIGNvbnN0IHNreWJveCA9IHNreWJveExvYWRlci5sb2FkKFtcbiAgICAgICAgXCJ4cG9zLnBuZ1wiLFxuICAgICAgICBcInhuZWcucG5nXCIsXG4gICAgICAgIFwieXBvcy5wbmdcIixcbiAgICAgICAgXCJ5bmVnLnBuZ1wiLFxuICAgICAgICBcInpwb3MucG5nXCIsXG4gICAgICAgIFwiem5lZy5wbmdcIixcbiAgICBdKTtcbiAgICBzY2VuZS5iYWNrZ3JvdW5kID0gc2t5Ym94O1xuICAgIC8vQ3JlYXRlIHN0YXJzXG4gICAgY29uc3Qgc3Rhckdlb21ldHJ5ID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gICAgY29uc3Qgc3Rhck1hdGVyaWFsID0gbmV3IFRIUkVFLlBvaW50c01hdGVyaWFsKHsgY29sb3I6IDB4ZmZmZmZmIH0pO1xuXG4gICAgY29uc3Qgc3RhckNvdW50ID0gNTAwMDtcbiAgICBjb25zdCBzdGFyUG9zaXRpb25zID0gbmV3IEZsb2F0MzJBcnJheShzdGFyQ291bnQgKiAzKTtcbiAgICBjb25zdCBzdGFyU2l6ZXMgPSBuZXcgRmxvYXQzMkFycmF5KHN0YXJDb3VudCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXJDb3VudCAqIDM7IGkrKykge1xuICAgICAgICBzdGFyUG9zaXRpb25zW2ldID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMTAwMDtcbiAgICAgICAgc3RhclNpemVzW2ldID0gTWF0aC5yYW5kb20oKSAqIDE7XG4gICAgfVxuICAgIHN0YXJHZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgIFwicG9zaXRpb25cIixcbiAgICAgICAgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShzdGFyUG9zaXRpb25zLCAzKVxuICAgICk7XG4gICAgc3Rhckdlb21ldHJ5LnNldEF0dHJpYnV0ZShcInNpemVcIiwgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShzdGFyU2l6ZXMsIDEpKTtcblxuICAgIGNvbnN0IHN0YXJzID0gbmV3IFRIUkVFLlBvaW50cyhzdGFyR2VvbWV0cnksIHN0YXJNYXRlcmlhbCk7XG4gICAgc2NlbmUuYWRkKHN0YXJzKTtcblxuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KC41LCAuNSwgLjUpO1xuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtcbiAgICAgICAgY29sb3I6IDB4MDA5NURELFxuICAgICAgICB3aXJlZnJhbWU6IHRydWUsXG4gICAgICAgIHdpcmVmcmFtZUxpbmV3aWR0aDogMlxuICAgIH0pO1xuICAgIGNvbnN0IGN1YmUgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICAgIHNjZW5lLmFkZChjdWJlKTtcbiAgICBjYW1lcmEucG9zaXRpb24ueiA9IDU7XG5cbiAgICAvLyBGdW5jdGlvbiB0byByZXZlYWwgdGhlIHdlbGNvbWUgdGV4dFxuICAgIGZ1bmN0aW9uIHJldmVhbFdlbGNvbWVUZXh0KCkge1xuICAgICAgICBjb25zdCB3ZWxjb21lVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VsY29tZS10ZXh0XCIpO1xuICAgICAgICB3ZWxjb21lVGV4dC5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgfVxuXG4gICAgLy8gRnVuY3Rpb24gdG8gaGlkZSB0aGUgd2VsY29tZSB0ZXh0IGFuZCBzaG93IHRoZSBpbnRybyBib3hcbiAgICBmdW5jdGlvbiBoaWRlV2VsY29tZVRleHRBbmRTaG93SW50cm9Cb3goKSB7XG4gICAgICAgIGNvbnN0IHdlbGNvbWVUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWxjb21lLXRleHRcIik7XG4gICAgICAgIGNvbnN0IGludHJvQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnRyby1ib3hcIik7XG5cbiAgICAgICAgd2VsY29tZVRleHQuc3R5bGUuZGlzcGxheSA9IFwiMFwiO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHdlbGNvbWVUZXh0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGludHJvQm94LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH1cbiAgICBjb25zdCB0b3RhbEFuaW1hdGlvbkR1cmF0aW9uID0gODtcbiAgICBsZXQgYW5pbWF0aW9uRmluaXNoZWQgPSBmYWxzZTtcbiAgICAvL0NvbnRyb2xzIGZvciB0aGUgb3JiaXQgc3RhcnMgbW92ZW1lbnRcbiAgICBjb25zdCBjb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudCk7XG4gICAgY29udHJvbHMuZW5hYmxlRGFtcGluZyA9IHRydWU7XG4gICAgbGV0IGluaXRpYWxDYW1lcmFBbmltYXRpb25Eb25lID0gZmFsc2U7XG4gICAgY2FtZXJhLnBvc2l0aW9uLnogPSAzMDA7XG4gICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgICAgICBpZiAoIWluaXRpYWxDYW1lcmFBbmltYXRpb25Eb25lKSB7XG4gICAgICAgICAgICAvLyBab29tIHRoZSBjYW1lcmEgZnJvbSB0aGUgaW5pdGlhbCBwb3NpdGlvbiB0byB0aGUgZGVmYXVsdCBwb3NpdGlvblxuICAgICAgICAgICAgZ3NhcC50byhjYW1lcmEucG9zaXRpb24sIHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMixcbiAgICAgICAgICAgICAgICB6OiA1LFxuICAgICAgICAgICAgICAgIG9uVXBkYXRlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxDYW1lcmFBbmltYXRpb25Eb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhbmltYXRpb25GaW5pc2hlZCkge1xuICAgICAgICAgICAgLy8gQW5pbWF0ZSB0aGUgeCwgeSBhbmQgeiBwb3NpdGlvbnMgb2YgdGhlIG9iamVjdHNcbiAgICAgICAgICAgIGdzYXAudG8oY3ViZS5wb3NpdGlvbiwgeyBkdXJhdGlvbjogNSwgeDogMSB9KTtcbiAgICAgICAgICAgIGdzYXAudG8oY3ViZS5wb3NpdGlvbiwgeyBkdXJhdGlvbjogNSwgeTogMSB9KTtcbiAgICAgICAgICAgIGdzYXAudG8oY3ViZS5wb3NpdGlvbiwgeyBkdXJhdGlvbjogNSwgejogMSB9KTtcblxuICAgICAgICAgICAgLy8gQW5pbWF0ZSB0aGUgeCwgeSBhbmQgeiBzY2FsZS9zaXplIG9mIHRoZSBvYmplY3RzXG4gICAgICAgICAgICBnc2FwLnRvKGN1YmUuc2NhbGUsIHsgZHVyYXRpb246IDgsIHg6IDIwIH0pO1xuICAgICAgICAgICAgZ3NhcC50byhjdWJlLnNjYWxlLCB7IGR1cmF0aW9uOiA4LCB5OiAyMCB9KTtcbiAgICAgICAgICAgIGdzYXAudG8oY3ViZS5zY2FsZSwgeyBkdXJhdGlvbjogOCwgejogMjAgfSk7XG4gICAgICAgICAgICAvLyBBbmltYXRlIHRoZSB4LCB5IGFuZCB6IHJvdGF0aW9uIG9mIHRoZSBvYmplY3RzXG4gICAgICAgICAgICBnc2FwLnRvKGN1YmUucm90YXRpb24sIHsgZHVyYXRpb246IDIsIHg6IDMgfSk7XG4gICAgICAgICAgICBnc2FwLnRvKGN1YmUucm90YXRpb24sIHsgZHVyYXRpb246IDIsIHk6IDMgfSk7XG4gICAgICAgICAgICBnc2FwLnRvKGN1YmUucm90YXRpb24sIHsgZHVyYXRpb246IDIsIHo6IDMgfSk7XG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vUm90YXRlIG9uY2Ugc2NhbGUgaXMgZG9uZVxuICAgICAgICAgICAgY3ViZS5yb3RhdGlvbi54ICs9IDAuMDAxO1xuICAgICAgICAgICAgY3ViZS5yb3RhdGlvbi55ICs9IDAuMDAxO1xuICAgICAgICAgICAgY3ViZS5yb3RhdGlvbi56ICs9IDAuMDAxO1xuICAgICAgICAgICAgLy9Sb3RhdGUgc3RhcnNcbiAgICAgICAgICAgIHN0YXJzLnJvdGF0aW9uLnggKz0gLTAuMDAxO1xuICAgICAgICAgICAgc3RhcnMucm90YXRpb24ueSArPSAtMC4wMDE7XG4gICAgICAgICAgICBzdGFycy5yb3RhdGlvbi56ICs9IC0wLjAwMTtcbiAgICAgICAgfVxuICAgICAgICBjb250cm9scy51cGRhdGUoKTtcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuICAgIH1cblxuICAgIGFuaW1hdGUoKTtcbiAgICBhcHAuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudCk7XG4gICAgLy8gVHJpZ2dlciB0aGUgd2VsY29tZSB0ZXh0IGFuZCBpbnRybyBib3ggZGlzcGxheVxuICAgIHJldmVhbFdlbGNvbWVUZXh0KCk7XG4gICAgc2V0VGltZW91dChyZXZlYWxXZWxjb21lVGV4dCwgdG90YWxBbmltYXRpb25EdXJhdGlvbiAqIDEwMDApO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBoaWRlV2VsY29tZVRleHRBbmRTaG93SW50cm9Cb3goKTtcbiAgICB9LCB0b3RhbEFuaW1hdGlvbkR1cmF0aW9uICogMzAwKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgYW5pbWF0aW9uRmluaXNoZWQgPSB0cnVlO1xuICAgIH0sIHRvdGFsQW5pbWF0aW9uRHVyYXRpb24gKiAyMDApO1xufSJdLCJuYW1lcyI6WyJUSFJFRSIsImdzYXAiLCJPcmJpdENvbnRyb2xzIiwiY3JlYXRlQW5pbWF0aW9uIiwiYXBwIiwic2NlbmUiLCJTY2VuZSIsImNhbWVyYSIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwic2V0U2l6ZSIsInNreWJveExvYWRlciIsIkN1YmVUZXh0dXJlTG9hZGVyIiwic2V0UGF0aCIsInNreWJveCIsImxvYWQiLCJiYWNrZ3JvdW5kIiwic3Rhckdlb21ldHJ5IiwiQnVmZmVyR2VvbWV0cnkiLCJzdGFyTWF0ZXJpYWwiLCJQb2ludHNNYXRlcmlhbCIsImNvbG9yIiwic3RhckNvdW50Iiwic3RhclBvc2l0aW9ucyIsIkZsb2F0MzJBcnJheSIsInN0YXJTaXplcyIsImkiLCJNYXRoIiwicmFuZG9tIiwic2V0QXR0cmlidXRlIiwiQnVmZmVyQXR0cmlidXRlIiwic3RhcnMiLCJQb2ludHMiLCJhZGQiLCJnZW9tZXRyeSIsIkJveEdlb21ldHJ5IiwibWF0ZXJpYWwiLCJNZXNoQmFzaWNNYXRlcmlhbCIsIndpcmVmcmFtZSIsIndpcmVmcmFtZUxpbmV3aWR0aCIsImN1YmUiLCJNZXNoIiwicG9zaXRpb24iLCJ6IiwicmV2ZWFsV2VsY29tZVRleHQiLCJ3ZWxjb21lVGV4dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsIm9wYWNpdHkiLCJoaWRlV2VsY29tZVRleHRBbmRTaG93SW50cm9Cb3giLCJpbnRyb0JveCIsImRpc3BsYXkiLCJzZXRUaW1lb3V0IiwidG90YWxBbmltYXRpb25EdXJhdGlvbiIsImFuaW1hdGlvbkZpbmlzaGVkIiwiY29udHJvbHMiLCJkb21FbGVtZW50IiwiZW5hYmxlRGFtcGluZyIsImluaXRpYWxDYW1lcmFBbmltYXRpb25Eb25lIiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInRvIiwiZHVyYXRpb24iLCJvblVwZGF0ZSIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJvbkNvbXBsZXRlIiwieCIsInkiLCJzY2FsZSIsInJvdGF0aW9uIiwidXBkYXRlIiwicmVuZGVyIiwiYXBwZW5kQ2hpbGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/animation.js\n"));

/***/ })

});