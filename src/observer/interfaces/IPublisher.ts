export interface IPublisher {
  subscribe(subscriber: ISubscriber): void;
  unsubscribe(subscriber: ISubscriber): void;
  publish(task: string): void;
}

export interface ISubscriber {
  update(task: string): void;
}
