import * as types from "./actionTypes"
import moment from 'moment'

export function receiveDietDays(json) {
    return { type: types.RECEIVE_DIETDAYS, dietDays: json ? mapDietDays(json) : [] }
}

function mapDietDays(json) {
    console.log(json)
    return json.map((dietDay) => ({
      choice: dietDay.choice,
      completion: dietDay.completion_percentage,
      weight: dietDay.weight,
      date: moment(dietDay.date),
    }))
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
    return () => { // turn back to dispatch when you dispatch(putResponse for response)
        return fetch('http://localhost:8080/dietDays', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({ choice: choice }),
        })
    }
}

export function updateDietDays(completion: number) {
  return () => { // turn back to dispatch when you dispatch(putResponse for response)
    return fetch('http://localhost:8080/dietDays/0', {
      method: 'PUT',
      mode: 'cors',
      body: JSON.stringify({ completion: completion }),
    })
  }
}


