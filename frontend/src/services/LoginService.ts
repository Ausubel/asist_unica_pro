/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance } from "axios";

class APIService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: "https://mi-api.com",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async obtenerDatos(): Promise<any> {
    try {
      const respuesta = await this.api.get("/endpoint");
      return respuesta.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async crearDato(dato: any): Promise<any> {
    try {
      const respuesta = await this.api.post("/endpoint", dato);
      return respuesta.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default APIService;
