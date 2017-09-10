import React from 'react';
import {render} from 'react-dom';
import {
    Admin, Resource, fetchUtils, Delete
} from 'admin-on-rest';

import {QuizList, QuizCreate, QuizEdit} from './quizzes/index';
import {QuestionList, QuestionCreate, QuestionEdit} from './questions/index';
import {ResultList, ResultEdit, ResultCreate} from "./results/index"

// import {Dashboard} from './dashboard';

//  Import REST APIs
import customRestClient from './rest/restClient';
import addUploadFeature from './rest/addUploadFeature';


const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({Accept: 'application/json'})
    }
    return fetchUtils.fetchJson(url, options);
};

const apiUrl = '/api';
const restClient = customRestClient(apiUrl, httpClient);
const uploadCapableClient = addUploadFeature(restClient);

render(
    <Admin restClient={uploadCapableClient} title="My Dashboard">
        <Resource name="quizzes" list={QuizList} edit={QuizEdit} create={QuizCreate} remove={Delete}/>
        <Resource name="questions" list={QuestionList} edit={QuestionEdit} create={QuestionCreate} remove={Delete}/>
        <Resource name="results" list={ResultList} edit={ResultEdit} create={ResultCreate} remove={Delete}/>
    </Admin>,
    document.getElementById('root')
);
