import { DiaryEntry, NonSensitiveInfoDiaryEntry } from '../types'
import diaryData from './diaries.json'

// Asercion de tipos = obligar a TS a considerar que la constante diaryData tiene que funcionar de una forma
// Es comun al trabajar con APIs externas, uno no controla la creacion de ese objeto.
// evitar la asercion, a veces es necesario.
const diaries: DiaryEntry[] = diaryData as DiaryEntry[] 

export const getEntries = (): DiaryEntry[] => diaries

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => diaries

export const addEntry = (): undefined => undefined
