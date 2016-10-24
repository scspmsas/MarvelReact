import { connect } from 'react-redux'
import { fetchCharacters, fetchCharactersSuccess, fetchCharactersFailure } from '../actions/Characters';
import { modifyPaginationActivePage } from '../actions/Pagination';
import CharactersList from '../components/Characters';


const mapStateToProps = (state) => {
  return {
    charactersList: state.characters.charactersList,
    activePageList: state.pagination.activePageList
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCharacters: (offset, activePage) => {
      dispatch(fetchCharacters(offset)).then((response) => {
        !response.error ?
          dispatch(fetchCharactersSuccess(response.payload),
            dispatch(modifyPaginationActivePage(activePage)
            )) : dispatch(fetchCharactersFailure(response.payload));
      });
    }
  }
}


const CharactersListContainer = connect(mapStateToProps, mapDispatchToProps)(CharactersList)

export default CharactersListContainer