"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const Swaper_1 = __importDefault(require("./component/Swaper"));
(async () => {
    skynode_1.BodyNode.append((0, skynode_1.el)("h1", (0, skynode_1.el)(".logo", "Chain Horizon", { href: "/" }), (0, skynode_1.el)(".pax", (0, skynode_1.el)("a", "Pax", {
        href: "https://medium.com/clones-never-die/cxnxd-pax-tokenomics-21-11-23-ee527cba3b06",
        target: "_blank",
    }), "Bridge")), (0, skynode_1.el)(".warning", "🚨 브릿지를 이용하기 위해서는 양쪽 체인에 가스비가 필요합니다.\n🚨 한번 전송이 시작되면 돌이킬 수 없습니다. 취소가 불가능합니다.\n🚨 폴리곤에서 보낼 때는 두번의 트랜잭션이 필요할 수 있습니다. 한 번은 PAX를 Chain Horizon이 사용하기 위해서, 다른 한 번은 실제 전송을 위해서입니다."), new Swaper_1.default(), (0, skynode_1.el)("footer", (0, skynode_1.el)("a", "© Chain Horizon", {
        href: "https://chainhorizon.org",
        target: "_blank",
    }), (0, skynode_1.el)(".social", (0, skynode_1.el)("a.item", (0, skynode_1.el)("img", "github", {
        src: "/images/github.png",
        height: "32",
    }), {
        href: "https://github.com/chainhorizon",
        target: "_blank",
    }), (0, skynode_1.el)("a.item", (0, skynode_1.el)("img", "medium", { src: "/images/medium.png", height: "32" }), {
        href: "https://medium.com/chainhorizon",
        target: "_blank",
    }), (0, skynode_1.el)("a.item", (0, skynode_1.el)("img", "twitter", {
        src: "/images/twitter.png",
        height: "32",
    }), {
        href: "https://chainhorizon.org",
        target: "_blank",
    }))));
})();
//# sourceMappingURL=main.js.map