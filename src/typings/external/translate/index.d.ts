declare module "translate" {
  export default function translate(
    text: string,
    options: any
  ): Promise<string>;
}
