/**
 *  Biz which renders individual objects as HTML
 */

 export const Business = (bizObject) => {
     return `
     <section class=business
            
            <h2 class=business__companyName>
                ${bizObject.companyName}
            </h2>
            <p class=business__addressFullStreet>
                ${bizObject.addressFullStreet}
            </p>
            <p class=business__addressCityStateZip>
                ${bizObject.addressCity}, ${bizObject.addressStateCode} ${bizObject.addressZipCode}
            </p>
     </section>
     `
 }

export const purchAgentHTMLCreate=(clientArray)=>{
    return `
    <section class=clients
    
        <div class=client__company>
            Name: ${clientArray.purchasingAgent.firstName}
        </div>
        <div class=client__streetAddress>
            Street: ${clientArray.companyName}
        </div>
        <div class=client__City>
            City: ${clientArray.phoneWork}
        </div>
        
        <br>
        </section>
        `
}
