
import { useState } from "react";

const Section = ({name, title, description, isVisible, setIsVisible}) => {
    return (
        <div className="border border-black p-2 m-2">
            <h3 className="font-bold text-xl">{title}</h3>
            {isVisible ? (
                <>
                    <button onClick={() => {
                        setIsVisible("")
                    }} className="cursor-pointer underline">Hide</button>
                    <p>{description}</p>
                </>
            )  : <button onClick={() => {
                setIsVisible(name)
            }} className="cursor-pointer underline">Show</button>}
        </div>
    )
}

const Instamart2 = () => {
    const [sectionConfig, setSectionConfig] = useState({
        showAbout: false,
        showTeam: false,
        showCareer: false
    });

    return (
        <div>
            <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
           <Section title={"About Instamart"} isVisible={sectionConfig.showAbout} setIsVisible={() => {
            setSectionConfig({
                showAbout: true,
                showTeam: false,
                showCareer: false
            })
           }} hide={() => {
            setSectionConfig({
                showAbout: false,
                showTeam: false,
                showCareer: false
            })
           }} description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."}/>
           <Section title={"Team Instamart"} isVisible={sectionConfig.showTeam} setIsVisible={() => {
            setSectionConfig({
                showAbout: false,
                showTeam: true,
                showCareer: false
            })
           }} hide={() => {
            setSectionConfig({
                showAbout: false,
                showTeam: false,
                showCareer: false
            })
           }} description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."} />
           <Section title={"Career Instamart"} isVisible={sectionConfig.showCareer} setIsVisible={() => {
            setSectionConfig({
                showAbout: false,
                showTeam: false,
                showCareer: true
            })
           }} hide={() => {
            setSectionConfig({
                showAbout: false,
                showTeam: false,
                showCareer: false
            })
           }} description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."} />
        </div>
    )
}

const Instamart = () => {
    const [visibleSection, setVisibleSection] = useState("")
    return (
        <>
        <Section name={"about"} title={"About Instamart"} setIsVisible={(secName) => setVisibleSection(secName)}
         isVisible={visibleSection === "about"} description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."} />
        <Section name={"team"} title={"Team Instamart"} setIsVisible={(secName) => setVisibleSection(secName)} 
        isVisible={visibleSection === "team"} description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."} />
        <Section name={"career"} title={"Career Instamart"} setIsVisible={(secName) => setVisibleSection(secName)}
         isVisible={visibleSection === "career"} description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."} />
        </>
    )
}

export default Instamart;


           {/* <AboutInstaMart/>
           <DetailsofInstaMart/>
           <TeamofInstaMart/>
           <Product/>
           <Careers/> */}
   
