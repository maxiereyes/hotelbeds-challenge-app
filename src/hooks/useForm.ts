/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useMemo, useState } from 'react';


export const useForm = ( initialForm: any = {}, formValidations: any = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [ formValidation, setFormValidation ] = useState<{[key: string]: string}>({});


    const onInputChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    useEffect(() => {
        createValidators();
    }, [ formState ])

    useEffect(() => {
        setFormState( initialForm );
    }, [ initialForm ])

    const isFormValid = useMemo(() => {
        for (const formValue of Object.keys( formValidation )) {
            if ( formValidation[ formValue ] !== null ) return false;
        }
        return true
    }, [ formValidation ])

    const createValidators = () => {
        const formCheckedValues = {} as {[key: string]: string};

        for (const formField of Object.keys(formValidations)) {
            const [ fn, errorMessage ] = formValidations[ formField ];

            formCheckedValues[ `${ formField }Valid` ] = fn( formState[ formField ] ) ? null : errorMessage;
        }

        setFormValidation( formCheckedValues );
    }


    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid
    }
}