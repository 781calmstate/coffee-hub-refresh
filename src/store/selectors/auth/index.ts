import { type RootState } from '../../store';

const selectToken = (state: RootState) => state.auth.token;

export const authSelectors = { selectToken };
