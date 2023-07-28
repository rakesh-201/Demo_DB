class Prog{
    public static void main(String[] args){
        // System.out.println("Hello World!");



        // int a = 2, b = 3, c = 5;

        // if(a >= b){
        //     if(a >= c){
        //         System.out.println(a);
        //     }
        //     else{
        //         System.out.println(c);
        //     }
        // }
        // else{
        //     if(b >= c){
        //         System.out.println(b);
        //     }
        //     else{
        //         System.out.println(c);
        //     }
        // }

        for(int i = 1; i < 11; ++i){
            System.out.println("5*" + i + " = " + 5*i);
        }
        System.out.println();
        
        int i = 1;
        while(i < 11){
            System.out.println("5*" + i + " = " + 5*i);
            ++i;
        }
        System.out.println();
        
        i = 1;
        do{
            System.out.println("5*" + i + " = " + 5*i);
            ++i;
        }while(i < 11);
    }
}