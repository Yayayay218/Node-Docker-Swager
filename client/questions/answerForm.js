// import React, {Component} from 'react';
// import {ReactDOM} from 'react-dom';
//
// class AnswerForm extends React {
//     constructor() {
//         super();
//         this.state = {
//             answer: '',
//             answers: [{ answer: '' }],
//         };
//     }
//
//     handleAnswerChange = (evt) => {
//         this.setState({ answer: evt.target.value });
//     }
//
//     handleAnswerNameChange = (idx) => (evt) => {
//         const newAnswers = this.state.answers.map((answer, sidx) => {
//             if (idx !== sidx) return answer;
//             return { ...answer, answer: evt.target.value };
//         });
//
//         this.setState({ answers: newAnswers });
//     }
//
//     handleSubmit = (evt) => {
//         const { answer, answers } = this.state;
//         // alert(`Incorporated: ${name} with ${shareholders.length} shareholders`);
//     }
//
//     handleAddAnswer = () => {
//         this.setState({ answers: this.state.answers.concat([{ answer: '' }]) });
//     }
//
//     handleRemoveAnswer = (idx) => () => {
//         this.setState({ answers: this.state.answers.filter((s, sidx) => idx !== sidx) });
//     }
//
//     render () {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <input
//                     type="text"
//                     placeholder="Company name, e.g. Magic Everywhere LLC"
//                     value={this.state.answer}
//                     onChange={this.handleAnswerChange}
//                 />
//
//                 <h4>Shareholders</h4>
//
//                 {this.state.answers.map((answer, idx) => (
//                     <div className="shareholder">
//                         <input
//                             type="text"
//                             placeholder={`answer #${idx + 1} answer`}
//                             value={answer.name}
//                             onChange={this.handleAnswerNameChange(idx)}
//                         />
//                         <button type="button" onClick={this.handleRemoveAnswer(idx)} className="small">-</button>
//                     </div>
//                 ))}
//                 <button type="button" onClick={this.handleAddAnswer} className="small">Add Shareholder</button>
//                 <button>Incorporate</button>
//             </form>
//         )
//     }
// }
//
// ReactDOM.render(<AnswerForm />, document.body);
