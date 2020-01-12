import React from 'react';
import { Radio, Col } from 'antd';
import { LANGUAGE } from 'translations/constants';
import 'antd/dist/antd.css';
import { switchLanguage } from '../../helpers/translation-helpers';

const { RU, EN } = LANGUAGE;

const SwitcherLanguage: any = (props: any) => (
    <Col span={5} offset={21}>
        <Radio.Group
            defaultValue={RU}
            buttonStyle="solid"
            size="small"
            onChange={switchLanguage}
        >
            <Radio.Button value="ru">{RU}</Radio.Button>
            <Radio.Button value="en">{EN}</Radio.Button>
        </Radio.Group>
    </Col>
);


export default SwitcherLanguage;
