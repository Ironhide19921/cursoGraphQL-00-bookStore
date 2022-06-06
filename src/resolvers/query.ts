import { IBook } from "./../interfaces/book-interface";
import { IResolvers } from "@graphql-tools/utils";
import { IPeople } from "../interfaces/people-interface";
import data from "../data";
import { valueFromAST } from "graphql";
import { argsToArgsConfig } from "graphql/type/definition";

const queryResolvers: IResolvers = {
  Query: {
    hello: (): String => "Hola a la API de GraphQL",
    helloWithName: (
      _: void,
      args: { name: string },
      context: any,
      info: object
    ) => {
      console.log(info);
      return `Hola ${args.name}`;
    },
    peopleNumber: () => 189303,
    booksList: (): {
      status: Boolean;
      message: string;
      list: Array<IBook>;
    } => {
      return {
        status: true,
        message: "Lista de libros correctamente cargada",
        list: data.books,
      };
    },
    peopleList: (): {
      status: Boolean;
      message: string;
      list: Array<IPeople>;
    } => {
      return {
        status: true,
        message: "Lista de personas correctamente cargada",
        list: data.people,
      };
    },
    book: (
      _: void,
      args: { id: string }
    ): {
      status: Boolean;
      message: string;
      item: IBook;
    } => {
      const bookFind = data.books.filter((value) => value.id === args.id)[0];
      return {
        status: bookFind === undefined ? false : true,
        message:
          bookFind === undefined
            ? `Libro con id ${args.id} no ha sido encontrado`
            : `Libro con id ${args.id} ha sido encontrado`,
        item: bookFind,
      };
    },
    people: (
      _: void,
      args: { id: string }
    ): {
      status: Boolean;
      message: string;
      item: IPeople;
    } => {
      const peopleFind = data.people.filter((value) => value.id === args.id)[0];
      return {
        status: peopleFind === undefined ? false : true,
        message:
          peopleFind === undefined
            ? `Persona con id ${args.id} no ha sido encontrado`
            : `Persona con id ${args.id} ha sido encontrado`,
        item: peopleFind,
      };
    },
  },
};

export default queryResolvers;
