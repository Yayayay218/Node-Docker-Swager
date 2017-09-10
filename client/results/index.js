import React from 'react';
import {
    Create,
    Edit,
    List,
    SimpleForm,
    FormTab,
    TabbedForm,
    DisabledInput,
    TextInput,
    DateInput,
    LongTextInput,
    ReferenceManyField,
    ReferenceInput,
    SelectInput,
    Datagrid,
    TextField,
    DateField,
    EditButton,
    DeleteButton,
    ImageInput,
    ImageField,
    ReferenceField
} from 'admin-on-rest';

import {required} from 'admin-on-rest'


export const ResultList = (props) => (
    <List {...props}>
        <Datagrid>
            <ReferenceField label="Quiz" source="quiz._id" reference="quizzes" allowEmpty>
                <TextField source="title"/>
            </ReferenceField>
            <TextField source="title" label="Result's Title"/>
            <TextField source="createdAt" label="Created At"/>
            <TextField source="updatedAt" label="Updated At"/>
            <EditButton/>
            <DeleteButton/>
        </Datagrid>
    </List>
);


export const ImageFormatter = v => {
    // console.log("====LogoFormatter=====: ", v);
    if (typeof v === 'object') {
        return v;
    }
    const imageObj = {
        "src": v
    };
    return imageObj;
};

export const ImageParser = v => {
    // console.log("====LogoParser=====: ", v);
    return v;
};

export const ResultCreate = (props) => (
    <Create {...props}>
        <TabbedForm>
            <FormTab label="Result's Information">
                <TextInput source="title" validate={[required]}/>
                <ReferenceInput label="Quiz" source="quiz" reference="quizzes" validate={[required]}
                                allowEmpty>
                    <SelectInput optionText="title"/>
                </ReferenceInput>
            </FormTab>
            <FormTab label="Featured Image">
                <ImageInput source="file" label="Featured Image" accept="image/*">
                    <ImageField source="src" title="title"/>
                </ImageInput>
            </FormTab>
        </TabbedForm>
    </Create>
);
const ResultTitle = ({record}) => {
    return <span>Result {record ? `"${record.title}"` : ''}</span>;
};
export const ResultEdit = (props) => (
    <Edit title={<ResultTitle/>} {...props}>
        <TabbedForm>
            <FormTab label="Result's Information">
                <DisabledInput label="Result Id" source="id"/>
                <TextInput source="title" label="Result's Title" validate={[required]}/>
                <ReferenceInput label="Quiz" source="quiz._id" reference="quizzes" validate={[required]}>
                    <SelectInput optionText="title"/>
                </ReferenceInput>
            </FormTab>
            <FormTab label="Featured Image">
                <ImageField source='featuredImg' title='title'/>
                <ImageInput source="file" label="Featured Image" accept="image/*">
                    <ImageField source="src" title="title"/>
                </ImageInput>
            </FormTab>
        </TabbedForm>
    </Edit>
);