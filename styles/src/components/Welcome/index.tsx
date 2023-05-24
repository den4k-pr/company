import { Advantages } from "./advantages/Advantages"
import { Career } from "./career/Career"
import { WelForm } from "./welForm/WelForm"

export const Welcome = () => {
    return(
        <>
            <Career />
            <Advantages />
            <WelForm />
        </>
    )
}