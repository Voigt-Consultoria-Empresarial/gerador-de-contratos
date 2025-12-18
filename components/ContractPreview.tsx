
import React from 'react';
import { Contratante, TemplateType } from '../types';
import TemplateModern from './TemplateModern';
import TemplateClassic from './TemplateClassic';
import TemplateDistratoClassic from './TemplateDistratoClassic';
import TemplateServiceClassic from './TemplateServiceClassic';
import TemplateServiceSDR from './TemplateServiceSDR';

interface ContractPreviewProps {
    contratante: Contratante;
    template: TemplateType;
}

const ContractPreview: React.FC<ContractPreviewProps> = ({ contratante, template }) => {
    return (
        <div id="pdf-content" className="w-full max-w-a4 mx-auto bg-white text-black shadow-page overflow-hidden">
           {template === TemplateType.Modern && <TemplateModern contratante={contratante} />}
           {template === TemplateType.Classic && <TemplateClassic contratante={contratante} />}
           {template === TemplateType.DistratoClassic && <TemplateDistratoClassic contratante={contratante} />}
           {template === TemplateType.ServiceClassicPercentage && <TemplateServiceClassic contratante={contratante} mode="percentage" />}
           {template === TemplateType.ServiceClassicFixed && <TemplateServiceClassic contratante={contratante} mode="fixed" />}
           {template === TemplateType.ServiceClassicSDR && <TemplateServiceSDR contratante={contratante} />}
        </div>
    );
};

export default ContractPreview;
