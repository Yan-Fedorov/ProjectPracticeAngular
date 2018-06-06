import DateTimeFormat = Intl.DateTimeFormat;
import { Guid } from 'guid-typescript';
import {Company} from '../CompanyField/Company';

export  class CompanyNotification {
  public Id: Guid;
  public Companies: Array<Company>;
  public DateTime: DateTimeFormat;
  public Info: string;
}
