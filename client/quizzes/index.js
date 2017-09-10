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
    Datagrid,
    TextField,
    DateField,
    EditButton,
    DeleteButton,
    ImageInput,
    ImageField
} from 'admin-on-rest';

import {required} from 'admin-on-rest'


export const QuizList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="title" label="Quiz's Title"/>
            <TextField source="description" label="Quiz's Description"/>
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

export const QuizCreate = (props) => (
    <Create {...props}>
        <TabbedForm>
            <FormTab label="Quiz's Information">
                <TextInput source="title" validate={[required]}/>
                <TextInput source="description" validate={[required]}/>
            </FormTab>
            <FormTab label="Featured Image">
                <ImageInput source="file" label="Featured Image" accept="image/*">
                    <ImageField source="src" title="title"/>
                </ImageInput>
            </FormTab>
        </TabbedForm>
    </Create>
);
const QuizTitle = ({record}) => {
    return <span>Quiz {record ? `"${record.title}"` : ''}</span>;
};
export const QuizEdit = (props) => (
    <Edit title={<QuizTitle/>} {...props}>
        <TabbedForm>
            <FormTab label="Quiz's Information">
                <DisabledInput label="Quiz Id" source="id"/>
                <TextInput source="title" label="Quiz's Title" validate={[required]}/>
                <TextInput source="description" label="Quiz's Description"/>
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