import { createContext } from "react";
import { TransferContextProps } from "../transfer/interfaces";

export const TransferContext = createContext<TransferContextProps>({} as TransferContextProps)