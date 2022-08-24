import axios from 'axios';

const url = 'http://localhost:5000';

export const getTestsCases = () => axios.get(`${url}/testCases`);
export const getSuites = () => axios.get(`${url}/suites`);
export const saveNewTestCase = (newTestCase) => axios.post(`${url}/saveTestCase`, {testCase: newTestCase});
export const saveNewSuites = (newSuites) => axios.post(`${url}/saveSuite`, {suites: newSuites});
export const deleteTestCases = (testCases) => axios.delete(`${url}/deleteTestCases`, {data: {testCases: testCases}});
export const deleteSuites = (suites) => axios.delete(`${url}/deleteSuites`, {data: {suites: suites}});