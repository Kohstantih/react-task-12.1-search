import {
    CHANGE_SEARCH_FIELD,
    SEARCH_SKILLS_REQUEST,
} from './actionsTypes'

export const changeSearchField = (search: string) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: { search },
  })

  export const searchSkillsRequest = (search: string) => ({
    type: SEARCH_SKILLS_REQUEST,
    payload: { search },
  });
