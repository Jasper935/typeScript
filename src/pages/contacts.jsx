import { Section } from "components/Section/Section"
import { Form } from "components/Form/Form"
import { Filter } from "components/Filter/Filter"
import { ContactsList } from "components/ContactsList/ContactsList"
import { useSelector } from "react-redux"
import styled from "styled-components";
import {HeroBackground} from '../components/Background';
// import {TextSection} from '../components//TextSection';
export const Contacts=()=>{

    const loader = useSelector(state => state.contacts.loading);
    
      const Wrapper = styled.div`
      /* position: absolute; */
      background: #1f1144;
      top: 50%;
      left: 50%;
      z-index: 0;
    `;
   


    return(<>
    <Wrapper className="App">
    <HeroBackground />
    </Wrapper>
    {/* <TextSection /> */}
  
        <Section title={'PhoneBook'}>
        <Form />
      </Section>
      <Section title={'Contacts'}>
        <Filter />
        <ContactsList/>
        {loader&&<h2>Loading...</h2>}
      </Section>
      
      </>
    )
}