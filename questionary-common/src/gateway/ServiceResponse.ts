/**
 * Type of servide response
 */
export enum TypeServiceResponse {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning'
}

/**
 * Servise response
 */
export interface ServiceResponse<T> {
  type: TypeServiceResponse;
  data?: T;
  message?: string
}

export function wrapperResponse(
  data: any,
  type: TypeServiceResponse = TypeServiceResponse.SUCCESS,
  message?: string): ServiceResponse<any> {
  const response: ServiceResponse<any> = {type, data, message};
  return response;
}