import { useRef,useEffect,useState } from "react";
import Button from 'react-bootstrap/Button';



const paragraphStyles ={
    WebkitLineClamp:2,
    WebkitBoxOrient: 'vertical',
    overflow:'hidden',
    display:'-webkit-box',
}


export default function Read(){

    const [isOpen, setIsOpen] = useState(false)
    return(
        <div>
            <p style={isOpen ? null : paragraphStyles}>
            Consolidated Shipping Agencies Limited is an indigenous Ghanaian Logistics company established on 13th February 1996.
             Over the years since its establishment, Conship has been providing world-class services
              along the supply chain consisting of freight forwarding, customs clearance, haulage, 
            vessel agency, husbandry, warehousing and container freight station operations
             at globally competitive standards.Conship’s experience since its humble beginning in 1996 is very rich with the company providing its services across multiple industries.
              This ranges from construction, oil and gas, Information Technology, mining, etc. there is no aversion to any legal industry. Rather, the company 
             maximises its efforts to provide quality world-class service to all industries to support the economic growth of Ghana.
            In growing its value proposition to serve the needs of clients at world-class levels, Conship refined its management processes to meet the requirements 
            of the international standards ISO 9001 [Service Quality Management], ISO 45001 [Health and Safety Management], ISO 14001 [Environmental Management] and
             TRACE [Anti-bribery and Anti-corruption Management]. These four subscriptions among many others have positioned the company strongly to provide
            maximum benefits and satisfaction to our clients devoid of any avoidable and unnecessary costs and delays.
            </p>

            <Button onClick={()=> setIsOpen(!isOpen)}>
                {isOpen ? 'read less...': 'read more...'}
                </Button>
        </div>
    )
}