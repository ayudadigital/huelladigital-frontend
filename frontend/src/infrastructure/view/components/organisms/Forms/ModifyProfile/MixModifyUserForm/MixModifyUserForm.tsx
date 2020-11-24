import React, { useState } from 'react';
import { ContactInfoForm } from '../ContactInfoForm';
import { LocationInfoForm } from '../LocationInfoForm';
import { OtherInfoForm } from '../OtherInfoForm';
import './MixModifyUserForm';

export const MixModifyUserForm: React.FC<{}> = () => {
  const [activeContactInfo, setActiveContactInfo] = useState(true);
  const [activeLocationinfo, setActiveLocationInfo] = useState(false);
  const [activeOtherInfo, setActiveOtherInfo] = useState(false);

  const handleContactFocus = () => {
    setActiveContactInfo(true);
    setActiveLocationInfo(false);
    setActiveOtherInfo(false);
  };

  const handleLocationFocus = () => {
    setActiveContactInfo(false);
    setActiveLocationInfo(true);
    setActiveOtherInfo(false);
  };

  const handleOtherFocus = () => {
    setActiveContactInfo(false);
    setActiveLocationInfo(false);
    setActiveOtherInfo(true);
  };

  return (
    <div className="mixForms">
      <div className="focusButton">
        <button
          aria-label="focusButton"
          onClick={handleContactFocus}
          disabled={activeContactInfo}
        >
          Información del usuario
        </button>
        <button
          arial-label="focusButton"
          onClick={handleLocationFocus}
          disabled={activeLocationinfo}
        >
          Información de localización
        </button>
        <button
          arial-label="focusButton"
          onClick={handleOtherFocus}
          disabled={activeOtherInfo}
        >
          Otra información
        </button>
      </div>
      <div>
        {activeContactInfo ? (
          <ContactInfoForm />
        ) : activeLocationinfo ? (
          <LocationInfoForm />
        ) : (
          <OtherInfoForm />
        )}
      </div>
    </div>
  );
};
