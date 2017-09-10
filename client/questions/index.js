import React from 'react';
import {
    Create,
    Edit,
    List,
    SimpleForm,
    DisabledInput,
    TextInput,
    DateInput,
    NumberInput,
    LongTextInput,
    ReferenceField,
    ReferenceManyField,
    ReferenceInput,
    Datagrid,
    TextField,
    DateField,
    EditButton,
    DeleteButton,
    SelectInput,
    ImageInput,
    ImageField,
    FormTab,
    TabbedForm,
    NullableBooleanInput
} from 'admin-on-rest';

import EmbeddedManyInput from './AddNewAnswerButton'
import {required, minValue, maxValue} from 'admin-on-rest';

export const QuestionList = (props) => (
    <List {...props}>
        <Datagrid>
            <ReferenceField label="Quiz" source="quiz._id" reference="quizzes" allowEmpty>
                <TextField source="title"/>
            </ReferenceField>
            {/*<TextField source="quiz.title" label="Quiz" />*/}
            <TextField source="title" label="Question's Name"/>
            <TextField source="type" label="Question's Type"/>
            {/*<TextField source="result" label="Question's Result"/>*/}
            <TextField source="createdAt" label="Created At"/>
            <TextField source="updatedAt" label="Updated At"/>
            <EditButton/>
            <DeleteButton/>
        </Datagrid>
    </List>
);

//export const QuestionCreate = (props) =>  {return ()}
export const QuestionCreate = (props) => {
    return (
        <Create {...props}>
            <TabbedForm>
                <FormTab label="Information">
                    <TextInput source="title" validate={[required]}/>
                    {/*<TextInput source="type" validate={[required]}/>*/}
                    <NumberInput source="type" validate={[required, minValue(0), maxValue(1)]}/>

                    <ReferenceInput label="Quiz" source="quiz" reference="quizzes" validate={[required]}
                                    allowEmpty>
                        <SelectInput optionText="title"/>
                    </ReferenceInput>
                </FormTab>

                <FormTab label="Answer">
                    <EmbeddedManyInput source="answers">
                        <TextInput source="content" label="Answer"/>
                        <NullableBooleanInput source="isCorrect" label="Is Correct?" validate={[required]}/>
                        {/*<ImageInput source="photos" label="Answer's Image" accept="image/*">*/}
                            {/*<ImageField source="src" title="title"/>*/}
                        {/*</ImageInput>*/}
                    </EmbeddedManyInput>
                </FormTab>

                <FormTab label="Featured Image">
                    <ImageInput source="file" label="Featured Image" accept="image/*">
                        <ImageField source="src" title="title"/>
                    </ImageInput>
                </FormTab>
            </TabbedForm>
        </Create>
    );
};

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

const QuestionTitle = ({record}) => {
    return <span>Question {record ? `"${record.title}"` : ''}</span>;
};
export const QuestionEdit = (props) => (
    <Edit title={<QuestionTitle/>} {...props}>
        <TabbedForm>
            <FormTab label="Information">
                <TextInput source="title" validate={[required]}/>
                <NumberInput source="type" validate={[required, minValue(1), maxValue(10)]}/>

                <EmbeddedManyInput source="answers">
                    <TextInput source="content" label="Answer"/>
                    <NullableBooleanInput source="isCorrect" label="Is Correct?" validate={[required]}/>
                </EmbeddedManyInput>

                <ReferenceInput label="Quiz" source="quiz._id" reference="quizzes">
                    <SelectInput optionText="title" validate={[required]}/>
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
