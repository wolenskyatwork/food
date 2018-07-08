import * as types from "./actionTypes"

export function receiveDietDays(json) {
    return { type: types.RECEIVE_DIETDAYS, dietDays: json ? json.dietDays : [] }
}

export function fetchDietDays() {
    return dispatch => {
        return fetch('http://localhost:8080/dietDays', {
            method: 'GET',
            mode: 'cors',
        }).then(response => response.json())
            .then(json => dispatch(receiveDietDays(json)))
    }
}

export function postDietDays(choice: string) {
    return dispatch => {
        return fetch('http://localhost:8080/dietDays', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({ choice: choice }),
        })
    }
}
