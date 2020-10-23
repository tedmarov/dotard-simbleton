/* Render individual businesses as HTML 
    Import useBiz
*/

import { useBiz } from "./BusinessProvider.js"
import { Business } from "./Business.js"

const buildBizContainerHTML = (arrayOfBiz) => {

    let bizHTMLRepresentations = ""
    for (const biz of arrayOfBiz) {

        bizHTMLRepresentations += Biz(biz)
    }

    return bizHTMLRepresentations
}

export const BizList = () => {


const contentTarget = document.querySelector(".business")

const BizList = () => {
    const bizArray = useBiz()
    contentTarget.innerHTML = "<h1>Active Businesses</h1>"

    bizArray.forEach(
        (bizObject) => {
            contentTarget.innerHTML += Business(bizObject)
        }
    );

    contentElement.innerHTML += `
    <section class="bizList">
    <h3>These are businesses.</h3>
    <div class="bizContainer">
        ${bizHTML}
    </div>
    </section>
`

}


}