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
export interface ServiceResponse {
  type: TypeServiceResponse;
  data?: any;
  message?: string
}

export function wrapperResponse(
  data: any,
  type: TypeServiceResponse = TypeServiceResponse.SUCCESS,
  message?: string): ServiceResponse {
  const response: ServiceResponse = {type, data, message};
  return response;
}