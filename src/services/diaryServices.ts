import { DiaryEntry } from '../types'
import diaryData from './diaries.json'

// Asercion de tipos = obligar a TS a considerar que la constante diaryData tiene que funcionar de una forma
// Es comun al trabajar con APIs externas, uno no controla la creacion de ese objeto.
// evitar la asercion, a veces es necesario.
const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry> 



export const getEntries = () => diaries
export const addEntry = () => null

