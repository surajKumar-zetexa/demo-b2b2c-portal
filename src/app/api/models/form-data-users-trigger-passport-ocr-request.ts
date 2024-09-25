/* tslint:disable */
/* eslint-disable */
import { MultipartFileHeader } from '../models/multipart-file-header';
export interface FormDataUsersTriggerPassportOcrRequest {

  /**
   * array of images consisting of passport front/back pages. first element is the image of passport front-page; second element is passport back-page
   */
  image: Array<MultipartFileHeader>;
}
