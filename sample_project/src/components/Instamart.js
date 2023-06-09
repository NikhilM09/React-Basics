import {useState} from "react";

 export const Section = ({name, description, isActive, updater}) => {
    // const [show, setShow] = useState(false);

    const handleClick = () => {
    //    isActive = !isActive; 
    }
    return(
        <div className = "mb-2">
            <h3 className="h3 border p-2">{name}</h3>
            <button className="btn btn-sm btn-success" onClick={updater}>{isActive ? "hide" : "show"}</button>
            {isActive && <p className="border mt-2 p-2">{description}</p>}
        </div>
    )
}

const Instamart = () => {
    const [activeIndex, setActiveIndex] = useState("4")
    return (
        <div className="container pt-4">
        <Section 
        name="About Instamart"
        description = "As Cicero would put it, “Um, not so fast The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero."
        isActive = {activeIndex==="1"}
        updater={()=>{activeIndex ==="1" ? setActiveIndex("0") : setActiveIndex("1")}}
        />
        <Section 
        name="Team Instamart"
        description = "As Cicero would put it, “Um, not so fast The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher CiceactiveIndexsActive "
        isActive={activeIndex==="2"}
        updater={()=>{activeIndex ==="2" ? setActiveIndex("0") : setActiveIndex("2")}}
         />
        <Section 
        name="Career at Instamart"
        description = "As Cicero would put it, “Um, not so fast The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero."
        isActive = {activeIndex==="3"}
        updater={()=>{activeIndex ==="3" ? setActiveIndex("0") : setActiveIndex("3")}}
        /> 
        <Section 
        name="Testimonials"
        description = "As Cicero would put it, “Um, not so fast The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero."
        isActive = {activeIndex==="4"}
        updater={()=>{activeIndex ==="4" ? setActiveIndex("0") : setActiveIndex("4")}}
        />
        </div>   
    )
} 

export default Instamart;