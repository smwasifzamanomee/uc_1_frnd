import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom'

import Container from '../../Components/Container'
import FormInput from '../../Components/Form/FormInput'
import Button from '../../Components/Ui/Button'

const ValidUser = () => {
    const validCodeRef = useRef('');
    const location = useLocation();
    console.log(location.state.id);


    const handleUserValid = async (e) => {
        await e.preventDefault();
        const res = await fetch('url', {id: location.state.id, code: validCodeRef.current.value})
        const data = await res.json();
        console.log(data);
    }

    return (
        <Container>
            <div className="md:w-[1000px] mx-auto min-h-max shadow-lg border-t border-primary md:flex justify-between gap-8 items-center">

                <form 
                onSubmit={handleUserValid}
                    className="flex-1 px-8 py-28">
                    <h3 className="text-3xl font-bold mb-6 text-center">Validition</h3>
                    <FormInput value={location.state.id} />
                    <FormInput ref={validCodeRef} />
                    <Button  type='submit' className=''>Submit</Button>
                </form>

            </div>
        </Container>
    )
}

export default ValidUser