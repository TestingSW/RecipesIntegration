export interface recipe {
    _id?: string
    title: string,
    ingredients: ingredient[],
    steps: [string?],
    img?: string,
  }

  export interface ingredient {
    name: string,
    quantity: Number,
  }