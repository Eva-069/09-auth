import axios, { AxiosError } from "axios";

export type ApiError = AxiosError<{ error: string }>;

