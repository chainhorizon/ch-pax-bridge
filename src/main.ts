import { BodyNode, el } from "@hanul/skynode";
import Swaper from "./component/Swaper";

(async () => {
    BodyNode.append(
        el("h1",
            el(".logo", "Chain Horizon", { href: "/" }),
            el(".pax",
                el("a", "Pax", {
                    href: "https://medium.com/clones-never-die/cxnxd-pax-tokenomics-21-11-23-ee527cba3b06",
                    target: "_blank",
                }),
                "Bridge",
            ),
        ),
        el(".warning", "🚨 브릿지를 이용하기 위해서는 양쪽 체인에 가스비가 필요합니다.\n🚨 한번 전송이 시작되면 돌이킬 수 없습니다. 취소가 불가능합니다.\n🚨 폴리곤에서 보낼 때는 두번의 트랜잭션이 필요할 수 있습니다. 한 번은 PAX를 Chain Horizon이 사용하기 위해서, 다른 한 번은 실제 전송을 위해서입니다."),
        new Swaper(),
        el("footer",
            el("a", "© Chain Horizon", {
                href: "https://chainhorizon.org",
                target: "_blank",
            }),
            el(".social",
                el("a.item",
                    el("img", "github", {
                        src: "/images/github.png",
                        height: "32",
                    }),
                    {
                        href: "https://github.com/chainhorizon",
                        target: "_blank",
                    }
                ),
                el("a.item",
                    el("img", "medium", { src: "/images/medium.png", height: "32" }),
                    {
                        href: "https://medium.com/chainhorizon",
                        target: "_blank",
                    }
                ),
                el("a.item",
                    el("img", "twitter", {
                        src: "/images/twitter.png",
                        height: "32",
                    }),
                    {
                        href: "https://chainhorizon.org",
                        target: "_blank",
                    }
                )
            )
        )
    );
})();
