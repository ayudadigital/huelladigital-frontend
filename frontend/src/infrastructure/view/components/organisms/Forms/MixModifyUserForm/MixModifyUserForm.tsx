import React, { useState } from 'react';
import './MixModifyUserForm';
import { withA11y } from '@storybook/addon-a11y';

export const MixModifyUserForm: React.FC<{}> = () => {
  const [activeContactInfo, setActiveContactInfo] = useState(true);
  const [activeLocationinfo, setActiveLocationInfo] = useState(false);
  const [activeOtherInfo, setActiveOtherInfo] = useState(false);

  const handleFocus = () => {
    setActiveContactInfo(!activeContactInfo);
    setActiveLocationInfo(!activeLocationinfo);
    setActiveOtherInfo(!activeOtherInfo);
  };
  // La idea es poner tres pestañas (button) cada una por sección de modificar perfil
  return (
    <div className="mixForms">
      <div className="focusButton">
        <button
          aria-label="focusButton"
          onClick={handleFocus}
          disabled={activeContactInfo}
        >
          Información del usuario
        </button>
        <button
          arial-label="focusButton"
          onClick={handleFocus}
          disabled={activeLocationinfo}
        >
          Información de localización
        </button>
        <button
          arial-label="focusButton"
          onClick={handleFocus}
          disabled={activeOtherInfo}
        >
          Otra información
        </button>
      </div>
    </div>
  );
};

/*<div>
  {activeContactInfo ? (
    <ContactInfoForm />
  ) : activeLocationinfo ? (
    <LocationInfoForm />
  ) : (
    <OtherInfoForm />
  )}
</div>;*/
