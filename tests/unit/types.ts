/**
 * Represents the possible data types that can be parsed by the data-parser.
 */
export type DataType = 'string' | 'number' | 'boolean' | 'date' | 'object' | 'array';

/**
 * Configuration for parsing a specific field in the data.
 */
export interface FieldConfig {
  name: string;
  type: DataType;
  required?: boolean;
  defaultValue?: unknown;
  validator?: (value: unknown) => boolean;
}

/**
 * Options for the data parsing process.
 */
export interface ParseOptions {
  strictMode?: boolean;
  allowUnknownFields?: boolean;
  dateFormat?: string;
}

/**
 * Result of parsing a single field.
 */
export interface ParseResult<T = unknown> {
  success: boolean;
  value?: T;
  error?: string;
}

/**
 * Represents the overall result of parsing a data object.
 */
export interface ParsedData {
  [key: string]: ParseResult;
}

/**
 * Error type for parsing failures.
 */
export interface ParseError {
  field: string;
  message: string;
  receivedValue?: unknown;
}

/**
 * Type guard to check if a value is of a specific DataType.
 */
export function isDataType(value: unknown, type: DataType): boolean {
  switch (type) {
    case 'string':
      return typeof value === 'string';
    case 'number':
      return typeof value === 'number' && !isNaN(value);
    case 'boolean':
      return typeof value === 'boolean';
    case 'date':
      return value instanceof Date || !isNaN(Date.parse(String(value)));
    case 'object':
      return typeof value === 'object' && value !== null && !Array.isArray(value);
    case 'array':
      return Array.isArray(value);
    default:
      return false;
  }
}