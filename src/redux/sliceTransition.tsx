import { createSlice } from "@reduxjs/toolkit";

interface Containt {
    total: string;
    description: string;
}

const INITIAL_STATE: Containt[] = [
    { total: "+10M", description: "Transações por mês" },
    { total: "18", description: "Setores da economia atendidos" },
    { total: "+40M", description: "De requisições e chamadas APIs por dia" },
    { total: "+602", description: "FitBankers" },
    { total: "+60M", description: "Usuários finais indiretos" }
]

const sliceTransition = createSlice({
    name: "totais",
    initialState: INITIAL_STATE,
    reducers: {

    }
})
export default sliceTransition.reducer;
export const usetotais = (state: any) => {
    return state.totais as Containt[];
}