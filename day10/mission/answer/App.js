//COMPONENTS
import Header from './components/Header.js';
import PokemonList from './components/PokemonList.js';
import PokemonDetail from './components/PokemonDetail.js';

//APIS
import { getPokemonList, getPokemonDetail } from './modules/api.js';

export default function App($app) {
    this.state = {
        type: '', // 포켓몬 타입
        pokemonList: [], // 포켓몬 리스트
        searchWord: '', // 검색어
        currentPage: '', // 현재 페이지 Url
    };
}
