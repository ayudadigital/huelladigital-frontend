import * as React from 'react';
import './FormRegisterEsal.scss';
import {FieldForm} from '../../../molecules/FieldForm';
import {TextAreaForm} from '../../../molecules/TextAreaForm';
import {FormRadio} from '../../../molecules/FormRadio';
import {Label} from '../../../atoms/Label';
import {Image} from '../../../atoms/Image';
import superHeroes from '../../../atoms/Image/assets/superHeroes.svg';
import {LinkText} from '../../../atoms/LinkText';
import {SubmitButton} from '../../../atoms/SubmitButton';
import {ROUTE} from '../../../../../http/routes';
import {useCheckEsal} from '../../../../../hooks/useCheckEsal';
import {ENTITY_TYPES, ISLANDS} from '../../../../../hooks/useCheckEsal/constans';
import {EsalService} from '../../../../../../domain/services/Esal.service';

const ERROR_MESSAGES = {
    name: 'Sólo puede contener letras, con un mínimo de 3 y un máximo de 30',
    surname: 'Sólo puede contener letras, con un mínimo de 3 y un máximo de 30',
    description: 'Mínimo 20 carácteres y un máximo de 500',
    website: 'Formato web incorrecto',
    registeredEntity: 'Debe seleccionar una opción',
    entityType: 'Debe seleccionar un tipo',
    privacyPolicy: 'Debe aceptar las condiciones',
    dataProtectionPolicy: 'Debe aceptar las condiciones',
    island: 'Debe seleccionar una isla',
    zipCode: 'Formato del código postal incorrecto',
    email: 'Formato incorrecto',
    repeatEmail: 'Email no coincide',
    phoneNumber: 'Formato incorrecto Ej: +XX XXXXXXXXX o +XXX',
    password: 'Debe empezar por al menos una letra y ser mayor de seis caracteres',
};

export const FormRegisterEsal: React.FC<{}> = () => {
    const {data, dataEmployee, checkEsal, checkEmployee, setData, setDataEmployee, validateEsal, validateEmployee} = useCheckEsal();
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const isValidEsal = validateEsal();
        const isValidEmployee = validateEmployee();

        if (isValidEmployee && isValidEsal) {
            await EsalService.registerBunch(data, dataEmployee);
        }
    };
    return (
        <>
            <form
                className="FormRegisterEsal"
                method={'POST'}
                id="form"
                onSubmit={handleSubmit}
            >
                <div className="div-register-contact-person">
                    <header>
                        <h1>Persona de Contacto</h1>
                    </header>
                    <div className="row">
                        <div className={'col'}>
                            <FieldForm
                                title={'Nombre *'}
                                type={'text'}
                                name={'name'}
                                stateValidate={checkEmployee.name}
                                onChange={(e) => {
                                    setDataEmployee({...dataEmployee, name: e.target.value});
                                }}
                                messageInfoUser={ERROR_MESSAGES.name}
                            />
                        </div>
                        <div className={'col'}>
                            <FieldForm
                                title={'Apellidos *'}
                                type={'text'}
                                name={'surname'}
                                stateValidate={checkEmployee.surname}
                                onChange={(e) => {
                                    setDataEmployee({...dataEmployee, surname: e.target.value});
                                }}
                                messageInfoUser={ERROR_MESSAGES.surname}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className={'col'}>
                            <FieldForm
                                title={'Email *'}
                                type={'email'}
                                name={'email'}
                                stateValidate={checkEmployee.email}
                                onChange={(e) => {
                                    setDataEmployee({...dataEmployee, email: e.target.value});
                                }}
                                messageInfoUser={ERROR_MESSAGES.email}
                            />
                        </div>
                        <div className={'col'}>
                            <FieldForm
                                title={'Confirmar email *'}
                                type={'email'}
                                name={'repeatEmail'}
                                stateValidate={checkEmployee.repeatEmail}
                                onChange={(e) => {
                                    setDataEmployee({...dataEmployee, repeatEmail: e.target.value});
                                }}
                                messageInfoUser={ERROR_MESSAGES.repeatEmail}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className={'col'}>
                            <FieldForm
                                title={'Teléfono de contacto *'}
                                type={'text'}
                                name={'phoneNumber'}
                                stateValidate={checkEmployee.phoneNumber}
                                onChange={(e) => {
                                    setDataEmployee({...dataEmployee, phoneNumber: e.target.value});
                                }}
                                messageInfoUser={ERROR_MESSAGES.phoneNumber}
                            />
                        </div>
                        <div className={'col'}>
                            <FieldForm
                                title={'Contraseña *'}
                                type={'password'}
                                name={'password'}
                                stateValidate={checkEmployee.password}
                                onChange={(e) => {
                                    setDataEmployee({...dataEmployee, password: e.target.value});
                                }}
                                messageInfoUser={ERROR_MESSAGES.password}
                            />
                        </div>
                    </div>
                </div>
                <div className={'register-esal'}>
                    <div className={'div-register-esal'}>
                        <header>
                            <h1>Datos Entidad</h1>
                        </header>
                        <div className={'row'}>
                            <div className={'col'}>
                                <FieldForm
                                    title={'Nombre entidad *'}
                                    type={'text'}
                                    name={'name'}
                                    stateValidate={checkEsal.name}
                                    onChange={(e) => {
                                        setData({...data, name: e.target.value});
                                    }}
                                    messageInfoUser={ERROR_MESSAGES.name}
                                />
                            </div>
                            <div className={'col'}>
                                <FieldForm
                                    title={'Página web'}
                                    type={'text'}
                                    name={'website'}
                                    stateValidate={checkEsal.website}
                                    onChange={(e) => {
                                        setData({...data, website: e.target.value});
                                    }}
                                    messageInfoUser={ERROR_MESSAGES.website}
                                />
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={'col'}>
                                <TextAreaForm
                                    title={'Descripción *'}
                                    name={'description'}
                                    placeholder={'Breve descripción de la entidad'}
                                    stateValidate={checkEsal.description}
                                    rows={10}
                                    cols={2}
                                    onChange={(e) => {
                                        setData({...data, description: e.target.value});
                                    }}
                                    messageInfoUser={ERROR_MESSAGES.description}
                                />
                            </div>
                            <div className={'col localization'}>
                                <Label text={'Ubicación *'}/>
                                <div className={'row'}>
                                    <div className={'col'}>
                                        <div className="div-radio">
                                            {ISLANDS.map((islands: string, index: number) => {
                                                return (
                                                    <FormRadio
                                                        name={'island'}
                                                        value={islands}
                                                        checked={false}
                                                        key={index}
                                                        onChange={(e) => {
                                                            setData({...data, island: e.target.value});
                                                        }}
                                                    />
                                                );
                                            })}
                                        </div>
                                        <div className={'error-message'}>
                                            {checkEsal.island === 'incorrect' && <p>{ERROR_MESSAGES.island}</p>}
                                        </div>
                                    </div>
                                    <div className={'col postal-code'}>
                                        <FieldForm
                                            title={'Código postal *'}
                                            type={'text'}
                                            name={'zipCode'}
                                            stateValidate={checkEsal.zipCode}
                                            onChange={(e) => {
                                                setData({...data, zipCode: e.target.value});
                                            }}
                                            messageInfoUser={ERROR_MESSAGES.zipCode}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={'col'}>
                                <Label text={'Logo *'}/>
                                <div className="image-upload">
                                    <label>
                                        <input type="file" className={'file'}/>
                                        <Image
                                            source={superHeroes}
                                            description={'super heroes logo register'}
                                            width={'300px'}
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className={'col organization'}>
                                <Label text={'Tipo de entidad *'}/>
                                <div className="row">
                                    <div className="div-organization">
                                        {ENTITY_TYPES.map((types, index) => {
                                            return (
                                                <FormRadio
                                                    name={'entityType'}
                                                    value={types}
                                                    checked={false}
                                                    key={index}
                                                    onChange={(e) => {
                                                        setData({...data, entityType: e.target.value});
                                                    }}
                                                />
                                            );
                                        })}
                                        <div className={'error-message'}>
                                            {checkEsal.entityType === 'incorrect' && (
                                                <p>{ERROR_MESSAGES.entityType}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className={'register-government'}>
                                    <Label
                                        text={
                                            'Registrada como entidad de voluntariado en el Gobierno de Canarias *'
                                        }
                                    />
                                    <div className={'row'}>
                                        <FormRadio
                                            name={'registeredEntity'}
                                            value={'Sí'}
                                            checked={false}
                                            onChange={() => {
                                                setData({...data, registeredEntity: true});
                                            }}
                                        />
                                        <FormRadio
                                            name={'registeredEntity'}
                                            value={'No'}
                                            checked={false}
                                            onChange={() => {
                                                setData({...data, registeredEntity: true});
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className={'error-message'}>
                                    {checkEsal.registeredEntity === 'incorrect' && (
                                        <p>{ERROR_MESSAGES.registeredEntity}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className={'row consents-check'}>
                            <Label text={'Consentimientos *'}/>
                            <div className={'data-protection'}>
                                <FormRadio
                                    title={'Política Privacidad'}
                                    type={'checkbox'}
                                    name={'privacyPolicy'}
                                    value={''}
                                    checked={false}
                                    onChange={(e) => {
                                        setData({...data, privacyPolicy: e.target.checked});
                                    }}
                                />
                                <p>
                                    Estoy de acuerdo de con la {''}
                                    <LinkText to={ROUTE.privacyPolicy} text={'Política de privacidad'}/>.
                                </p>
                            </div>
                            <div className={'data-protection'}>
                                <FormRadio
                                    title={'Protección de datos'}
                                    type={'checkbox'}
                                    name={'dataProtectionPolicy'}
                                    value={''}
                                    checked={false}
                                    onChange={(e) => {
                                        setData({
                                            ...data,
                                            dataProtectionPolicy: e.target.checked,
                                        });
                                    }}
                                />
                                <p>
                                    Estoy de acuerdo de con la {''}
                                    <LinkText
                                        to={ROUTE.legalAdvice}
                                        text={'Política de protección de datos'}
                                    />
                                    .
                                </p>
                            </div>
                            <div className={'error-message'}>
                                {checkEsal.dataProtectionPolicy === 'incorrect' && (
                                    <p>{ERROR_MESSAGES.dataProtectionPolicy}</p>
                                )}
                            </div>
                            <div className={'button-register'}>
                                <SubmitButton text={'Registrar Entidad'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

FormRegisterEsal.displayName = 'FormRegisterEsal';
