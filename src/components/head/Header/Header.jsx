import s from "./Header.module.css";
import { Section } from "../../Section/Section";
import { Contacts } from "../Contacts/Contacts";
import { Logo } from "../Logo/Logo";
import { FormInput } from "../FormInput/FormInput";
// import { Pages } from "../Pages/Pages";
         
         
export const Header = () => {
    return (
<>
    <Section className={s.conteiner}>
        <Contacts/>
            
        <Logo/>

        <FormInput
                    // onSubmit={onCall}
                />

    </Section>
    
            
    {/* <Pages /> */}        
</>
    );
};
         
        
          