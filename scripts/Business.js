/**
 *  Biz which renders individual objects as HTML
 */

 export const Business = (bizObject) => {
     return `
     <section class="business">
            
            <h2 class="business__companyName">
                "${bizObject.companyName}"
            </h2>
            <p class="business__addressFullStreet">
                "${bizObject.addressFullStreet}"
            </p>
            <p class="business__addressCityStateZip">
                "${bizObject.addressCity}, ${bizObject.addressStateCode} ${bizObject.addressZipCode}"
            </p>
     </section>
     `
 }

        /*  <div class="business__phoneWork">
                Phone: "${bizObject.phoneWork}"
            </div>
            <div class="business__orders">
                Orders: "${bizObject.orders}"
            </div>
            <div class="business__companyName">
                Agent: "${bizObject.purchasingAgent.nameLast} ${bizObject.purchasingAgent.nameFirst}"
            </div>
            <div class="business__companyIndustry">
                Company Industry: "${bizObject.companyIndustry}"
            </div> */