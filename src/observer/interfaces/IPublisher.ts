import { ISubscriber } from "./ISuscriber";

export interface IPublisher {
  subscribe(subscriber: ISubscriber): void;
  unsubscribe(subscriber: ISubscriber): void;
  publish(task: string): void;
}
